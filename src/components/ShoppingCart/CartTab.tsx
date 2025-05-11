import { Button, Checkbox, type CheckboxChangeEvent, Empty } from "antd";
import styles from "./CartTab.module.less";
import CartItem, { type TProduct } from "./CartItem";
import { EProductType } from "@/types";
import { useMemo } from "react";

interface CartItemProps {
    type: EProductType;
    products: TProduct[];
    /** 更新购物车，主要用于移除的时候 */
    updateCarts: (type: EProductType, products: TProduct[]) => void;
}

const CartTab = ({ type, products, updateCarts }: CartItemProps) => {
    /** 已选的products */
    const checkedProducts = products.filter(item => item.checked);
    /** 已选总金额 */
    const totalPrice = useMemo(() => checkedProducts.reduce((acc, cur) => acc + cur.totalPrice, 0), [checkedProducts])
    /** 全选 */
    const allChecked = checkedProducts.length === products.length;
    /** 部分选中 */
    const indeterminate = checkedProducts.length > 0 && checkedProducts.length < products.length;
    const idType = type === EProductType.VIDEO ? 'vid' : type === EProductType.IMAGE ? 'fid' : 'mid';
    /** 选择或者取消选择 */
    const handleCheckCart = (product: TProduct) => {
        updateCarts(
            type,
            products.map(item => ({
                ...item,
                checked: item[idType] === product[idType] ? !item.checked : item.checked
            }))
        );
    }
    /** 全选或者取消全选 */
    const handleAllCheck = (e: CheckboxChangeEvent) => {
        updateCarts(type, products.map(item => ({ ...item, checked: !item.disabled ? e.target.checked : item.checked })));
    }
    /** 移除具体某个类型的某一条数据 */
    const handleDeleteCart = (product: TProduct) => {
        updateCarts(type, products.filter(item => item[idType] !== product[idType]));
    };
    /** 提交 */
    const handleSubmit = () => {
        // TODO 提交订单
        console.log(checkedProducts, checkedProducts.map(item => item[idType]), totalPrice);
    };
    /** 渲染购物车内容 */
    const renderTabContent = (products: TProduct[]) => {
        if (!products.length) return <Empty description="购物车为空" />;

        return (
            <div className={styles.cartItems}>
                {
                    products.map(item =>
                        <CartItem
                            key={item.vid || item.fid || item.mid} productInfo={item}
                            handleDeleteCart={handleDeleteCart}
                            handleCheckCart={handleCheckCart} />
                    )
                }
            </div>
        );
    };
    return (
        <div className={styles.cartTab}>
            {renderTabContent(products)}
            <div className={styles.cartFooter}>
                <div className={styles.footerTop}>
                    <Checkbox indeterminate={indeterminate} checked={allChecked} onChange={handleAllCheck}>全选</Checkbox>
                    <div className={styles.totalInfo}>
                        <span className={styles.totalCount}>已选 {checkedProducts.length} 件</span>
                        总计:
                        <div className={styles.totalPriceWithUnit}>
                            <span className={styles.totalPrice}>{totalPrice}</span>
                            元
                        </div>
                    </div>
                </div>
                <Button
                    type="primary"
                    size="large"
                    block
                    disabled={!checkedProducts.length}
                    className={styles.submitBtn}
                    onClick={handleSubmit}
                >
                    立即购买
                </Button>
            </div>
        </div>
    )
}

export default CartTab;