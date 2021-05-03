import React, {useContext, useEffect} from 'react';
import {RouterContext} from '../../contexts/RouterContext';
import Logonbox from '../Logonbox/Logonbox';
import Head from 'next/head';
import Banner from './Banner';
import styles from './Header.module.scss';
import Navbar from './Navbar';
import {AuthContext} from '../../contexts/AuthContext';

const Header = (props) => {
  const {content: activePage} = props;
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet"/>
    </Head>
    <div className={styles.headerWrapper}>
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
