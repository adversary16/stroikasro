import React, {useContext, useEffect} from 'react';
import {RouterContext} from '../../contexts/RouterContext';
import Logonbox from '../Logonbox/Logonbox';
import Banner from './Banner';
import styles from './Header.module.scss';
import Navbar from './Navbar';

const Header = (props) => {
  const {content: activePage} = props;
  return <><div className={styles.headerWrapper}>
    <div className={styles.row_top}>
      <Navbar/>
      <Logonbox/>
    </div>
  </div>
  { (activePage && activePage.banner?.image) &&
     <Banner {...activePage.banner}></Banner>
  }
  <div className={styles.separator}></div>
  </>;
};

export default React.memo(Header);
