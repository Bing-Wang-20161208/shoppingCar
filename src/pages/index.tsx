import { useState } from 'react';
import { Card, ConfigProvider, FloatButton } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import ShoppingCart from '../components/ShoppingCart';
import styles from './index.module.less';

export default function HomePage() {
  const [cartVisible, setCartVisible] = useState(false);
  const [count, setCount] = useState(0);

  const showCart = () => {
    setCartVisible(true);
  };

  const hideCart = () => {
    setCartVisible(false);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#000000',
        },
      }}
    >
      <div className={styles.container}>
        <Card title="视频素材库" className={styles.card}>
          <div className={styles.content}>
            <p>这是一个视频素材库示例页面</p>
            <p>点击右下角的购物车图标查看购物车</p>
          </div>
        </Card>

        <FloatButton icon={<ShoppingCartOutlined />} badge={{ count, color: 'blue' }} onClick={showCart} />

        <ShoppingCart visible={cartVisible} onClose={hideCart} setTotalCount={(v: number) => setCount(v)} />
      </div>
    </ConfigProvider>
  );
}
