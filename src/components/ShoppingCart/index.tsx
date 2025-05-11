import React, { useEffect, useState } from 'react';
import { Drawer, Tabs } from 'antd';
import { EProductStatus, EProductType, IBuyHistoryVideo, type IImageProduct, type IMusicProduct, type IVideoProduct } from '@/types';
import styles from './index.module.less';
import CartTab from './CartTab';
import { CloseOutlined } from '@ant-design/icons';
import { type TProduct } from './CartItem';
import request from '@/http';

interface ShoppingCartProps {
    visible: boolean;
    onClose: () => void;
    /** 设置购物车总数 */
    setTotalCount: (count: number) => void;
}
interface IProductCollection {
    [EProductType.VIDEO]: IVideoProduct[];
    [EProductType.IMAGE]: IImageProduct[];
    [EProductType.MUSIC]: IMusicProduct[];
}

/** tabs标签选项 */
const PRODUCT_TYPE_OPTIONS = [
    { label: '视频', value: EProductType.VIDEO },
    { label: '图片', value: EProductType.IMAGE },
    { label: '音乐', value: EProductType.MUSIC },
]

const ShoppingCart: React.FC<ShoppingCartProps> = ({ visible, onClose, setTotalCount }) => {
    const [productCollection, setProductCollection] = useState<IProductCollection>({
        [EProductType.VIDEO]: [],
        [EProductType.IMAGE]: [],
        [EProductType.MUSIC]: [],
    });

    const [loading, setLoading] = useState<boolean>(false);
    /** 初始化购物车视频数据 */
    const fetchVideoList = async () => {
        const videoList: IVideoProduct[] = await request.get('/vjh/buyer/cart/videos');
        if (videoList?.length) {
            const ids = videoList.map(v => v.vid);
            const buyVideoList: IBuyHistoryVideo[] = await request.get('/vjh/video/download/lic-types-bought', {
                paramsSerializer: {
                    indexes: null
                },
                params: {
                    vids: ids
                }
            });
            const videoFormatList: IVideoProduct[] = videoList.map(v => ({
                ...v,
                checked: false,
                disabled: v.auditStatus !== EProductStatus.SUCCESS || buyVideoList.some(b => b.vid === v.vid && b.licTypes.includes(v.licType)),
            }))
            setProductCollection(prev => ({ ...prev, [EProductType.VIDEO]: videoFormatList }));
        } else {
            setProductCollection(prev => ({ ...prev, [EProductType.VIDEO]: [] }));
        }
    }
    // 初始化购物车图片数据
    const fetchImageList = async () => {
        const imageList: IImageProduct[] = await request.get('/vjh/buyer/cart/fotos');
        if (imageList?.length) {
            const ids = imageList.map(v => v.fid);
            const buyImageList: IBuyHistoryVideo[] = await request.get('/vjf/foto/download/lic-types-bought', {
                paramsSerializer: {
                    indexes: null
                },
                params: {
                    fids: ids
                }
            })
            const imageFormatList: IImageProduct[] = imageList.map(v => ({
                ...v,
                checked: false,
                disabled: v.auditStatus !== EProductStatus.SUCCESS || buyImageList.some(b => b.vid === v.fid && b.licTypes.includes(v.licType)),
            }))
            setProductCollection(prev => ({ ...prev, [EProductType.IMAGE]: imageFormatList }));
        }
    }
    // 初始化购物车音乐数据
    const fetchMusicList = async () => {
        const musicList: IMusicProduct[] = await request.get('/vjm/cart/music/musics');
        if (musicList?.length) {
            const ids = musicList.map(v => v.mid);
            const buyMusicList: IBuyHistoryVideo[] = await request.get('/vjm/music/download/lic-types-bought', {
                paramsSerializer: {
                    indexes: null
                },
                params: {
                    mids: ids
                }
            })
            const musicFormatList: IMusicProduct[] = musicList.map(v => ({
                ...v,
                checked: false,
                disabled: v.auditStatus !== EProductStatus.SUCCESS || buyMusicList.some(b => b.vid === v.mid && b.licTypes.includes(v.licType)),
            }))
            setProductCollection(prev => ({ ...prev, [EProductType.MUSIC]: musicFormatList }));
        } else {
            setProductCollection(prev => ({ ...prev, [EProductType.MUSIC]: [] }));
        }
    }
    // 汇总获取不同类型获取购物车的接口
    const fetchCartList = async () => {
        try {
            setLoading(true);
            await Promise.all([fetchVideoList(), fetchImageList(), fetchMusicList()]);
        } catch (error) {
            console.error('获取购物车数据失败:', error);
        } finally {
            setLoading(false);
        }
    };

    // 初始化数据
    useEffect(() => {
        if (visible) {
            fetchCartList();
        }
    }, [visible]);


    // 更新购物车
    const updateCarts = (type: EProductType, products: TProduct[]) => {
        setProductCollection(prev => ({
            ...prev,
            [type]: products
        }))
    }

    // 计算购物车总数量
    useEffect(() => {
        const totalCount: number = Object.values(productCollection).reduce((acc, cur) => {
            return acc + cur.length;
        }, 0);
        setTotalCount(totalCount);
    }, [productCollection]);

    // 标题
    const title = () => {
        return (
            <div className={styles.drawerTitle}>
                <span className={styles.text}>购物车</span>
                <CloseOutlined className={styles.icon} onClick={onClose} />
            </div>
        );
    };

    return (
        <Drawer
            title={title()}
            placement="right"
            onClose={onClose}
            open={visible}
            width={514}
            className={styles.cartDrawer}
            closeIcon={null}
            loading={loading}
            destroyOnHidden
        >
            <Tabs
                size='large'
                items={PRODUCT_TYPE_OPTIONS.map(p => ({
                    label: `${p.label}${productCollection[p.value].length || ''}`,
                    key: p.value,
                    children: <CartTab type={p.value} products={productCollection[p.value]} updateCarts={updateCarts} />,
                }))}
            />
        </Drawer>
    );
};

export default ShoppingCart;