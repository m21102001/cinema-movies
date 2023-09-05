import React from 'react';
import styles from './home.module.css';
import { Header, Footer, Navbar, Cart } from '@/layout';
// import { Cart } from '../../components/Cart';

const index = () => {

  return (
    <div className={styles.root}>
      {/* <Navbar /> */}
      <Header />
      <div className={styles.Grid}>
            <Cart />
      </div>
    </div>
  );
};

export default index;
