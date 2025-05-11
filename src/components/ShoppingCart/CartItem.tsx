import { type MouseEventHandler } from "react";
import { ELicType, EProductType, type IImageProduct, type IMusicProduct, type IVideoProduct } from "@/types";

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
    const renderImage = () =>
        productType === EProductType.VIDEO
            ? <Image width={117} height={68} src={productInfo.coverImage} alt={productInfo.title} preview={false} />
            : productType === EProductType.IMAGE
                ? <Image width={99} height={66} src={productInfo.coverImage} alt={productInfo.title} preview={false} />
                : <Image width={66} height={66} src={productInfo.coverImage} alt={productInfo.title} preview={false} />;


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
                <span className={styles.delete} onClick={handleDelete}>移除</span>
                {productInfo.disabled ? <span className={styles.disabledReason}>已下架或已购买</span> : ''}
                <div className={styles.itemCount}>
                    {ELIC_OPTION[productInfo.licType]}
                    <span className={styles.price}>{productInfo.price}</span>
                    元
                </div>
            </div>
        </div>
    )
}

export default CartItem;