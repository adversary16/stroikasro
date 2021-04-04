import React from 'react';
import Logonbox from '../Logonbox/Logonbox';
import styles from './Header.module.scss';
import Navbar from './Navbar';

const Header = () => {
  return <div className={styles.headerWrapper}>
    <Navbar/>
    <Logonbox/>
  </div>;
};

export default React.memo(Header);
