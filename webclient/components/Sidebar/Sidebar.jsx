import React, {useContext} from 'react';
import {RouterContext} from '../../contexts/RouterContext';
import SideNavMenu from '../SideNavMenu/SideNavMenu';
import styles from './Sidebar.module.scss';

const SidebarHeader = ({children}) =>{
  return <span style={styles.sidebar_header}>
    {children}
  </span>;
};

const Sidebar = () => {
  const {asPath, childPages, currentPage: {alias}} = useContext(RouterContext);
  return <div className={styles.sidebar_root}>
    {
      childPages && <>
        <SidebarHeader>{alias}</SidebarHeader>
        <SideNavMenu {...{childPages}}/>
      </>
    }
  </div>;
};

export default React.memo(Sidebar);
