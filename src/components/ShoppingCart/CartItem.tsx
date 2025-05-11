import { type MouseEventHandler } from "react";
import { ELicType, EProductStatus, EProductType, type IImageProduct, type IMusicProduct, type IVideoProduct } from "@/types";

import styles from './CartItem.module.less';
import { Checkbox, Divider, Image, Space, Typography } from "antd";

export type TProduct = IVideoProduct & IImageProduct & IMusicProduct;

interface CartItemProps {
    productInfo: TProduct;
    handleDeleteCart: (product: TProduct) => void;
    handleCheckCart: (product: TProduct) => void;
}

/** 授权类型的映射关系 */
const ELIC_OPTION = {
    [ELicType.NP]: '个人授权',
    [ELicType.LP]: '企业授权',
    [ELicType.LPPLUS]: '企业PLUS',
}

const CartItem = ({ productInfo, handleDeleteCart, handleCheckCart }: CartItemProps) => {
    // 产品的ID，vid、fid、mid
    const productId = productInfo.vid || productInfo.fid || productInfo.mid;
    // 产品的类型，EProductType
    const productType = productInfo.vid ? EProductType.VIDEO : productInfo.fid ? EProductType.IMAGE : EProductType.MUSIC;

    /** 选择或取消checkbox */
    const handleCheckboxChange = () => {
        handleCheckCart(productInfo);
    }
    /** 点击进入详情 */
    const handleDetail: MouseEventHandler<HTMLDivElement> = () => {
        // 进入详情 push
        console.log('进入详情');
    }
    /** 移除 */
    const handleDelete: MouseEventHandler<HTMLSpanElement> = (e) => {
        e.stopPropagation();
        // 移除商品
        // TODO 还需要同步后端接口
        // 同步数据
        handleDeleteCart(productInfo);
    }

    // 不同类型的图片尺寸不同
    const renderImage = () => {
        const style = productType === EProductType.VIDEO
            ? { width: '117px', height: '68px' }
            : productType === EProductType.IMAGE
                ? { width: '99px', height: '66px' }
                : { width: '66px', height: '66px' };
        return (
            <div className={styles.coverImage} style={style}>
                <Image src={productInfo.coverImage} alt={productInfo.title} preview={false} />
                {productInfo.auditStatus === EProductStatus.FAIL ? <div className={styles.maskStatusFail}>已下架</div> : ''}
            </div>
        )
    }

    return (
        <div className={styles.cartItem} onClick={handleDetail}>
            <div className={styles.top}>
                <Checkbox
                    className={styles.checkbox}
                    checked={productInfo.checked}
                    disabled={productInfo.disabled}
                    onChange={handleCheckboxChange}
                    onClick={e => { e.stopPropagation() }}
                />
                {renderImage()}
                <div className={styles.itemInfo}>
                    <div className={styles.itemTitle}>
                        <Typography.Text ellipsis>{productInfo.title}</Typography.Text>
                    </div>
                    <Space>
                        <span className={styles.propsDes}>ID: {productId}</span>
                        {
                            // 视频和图片有软件类型，音乐没有
                            productType !== EProductType.MUSIC
                                ? <>
                                    <Divider type="vertical" />
                                    <span className={styles.propsDes}>类型: {productInfo.softwareType}</span>
                                </>
                                : ''
                        }
                    </Space>
                </div>
            </div>
            <div className={styles.bottom}>
                <div>
                    <span className={styles.delete} onClick={handleDelete}>移除</span>
                    {productInfo.isBuy ? <span className={styles.disabledReason}>您已购买过此素材 &gt;</span> : ''}
                </div>
                <div className={styles.itemCount}>
                    {ELIC_OPTION[productInfo.licType]}
                    <span className={styles.price}>{productInfo.totalPrice}</span>
                    元
                </div>
            </div>
        </div>
    )
}

export default CartItem;