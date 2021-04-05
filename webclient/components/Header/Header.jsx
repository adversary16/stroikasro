import React from 'react';
import Logonbox from '../Logonbox/Logonbox';
import styles from './Header.module.scss';
import Navbar from './Navbar';

const Header = () => {
  return <><div className={styles.headerWrapper}>
    <div className={styles.row_top}>
      <Navbar/>
      <Logonbox/>
    </div>
  </div>
  <div className={styles.banner}></div>
  </>;
};

export default React.memo(Header);
