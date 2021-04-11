import React, {useContext, useEffect} from 'react';
import {RouterContext} from '../../contexts/RouterContext';
import Logonbox from '../Logonbox/Logonbox';
import styles from './Header.module.scss';
import Navbar from './Navbar';

const Header = () => {
  const {currentPage, activePage} = useContext(RouterContext);
  return <><div className={styles.headerWrapper}>
    <div className={styles.row_top}>
      <Navbar/>
      <Logonbox/>
    </div>
  </div>
  { currentPage.banner &&
     <div className={styles.banner}></div>
  }
  </>;
};

export default React.memo(Header);
