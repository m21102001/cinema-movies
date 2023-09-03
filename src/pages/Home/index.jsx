import React from 'react';
import styles from './home.module.css';
import { Button, Inputs, Modal, ToolTip } from '@/components';
import { Header, Footer, Navbar, Cart } from '@/layout';
// import { Cart } from '../../components/Cart';

const index = () => {
  const cardRepeat = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.root}>
      <Navbar />
      <Header />
      <div className={styles.Grid}>
        {cardRepeat.map((index) => (
          <div key={index}>
            <Cart />
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
