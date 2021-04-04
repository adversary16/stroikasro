import React from 'react';
import styles from './Header.module.scss';
import Navbar from './Navbar';

const Header = () => {
  return <div className={styles.headerWrapper}>
    <Navbar/>
  </div>;
};

export default React.memo(Header);
