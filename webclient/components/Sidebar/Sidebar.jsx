import React, {useContext} from 'react';
import {v4} from 'uuid';
import HTMLcontent from '../../common/HTMLcontent';
import {RouterContext} from '../../contexts/RouterContext';
import SideNavMenu from '../SideNavMenu/SideNavMenu';
import styles from './Sidebar.module.scss';

const SidebarHeader = ({children}) =>{
  return <span className={styles.header}>
    {children}
  </span>;
};

const SideBarBlock = ({block: {title, content}}) => {
  return (
    <div className={styles.block}>
      <SidebarHeader>{title}</SidebarHeader>
      <div className={styles.content}>
        <HTMLcontent {...{content}}/>
      </div>
    </div>);
};

const Sidebar = () => {
  const {
    asPath,
    activePage: {
      alias,
      childPages,
      sidebarBlocks,
    },
  } = useContext(RouterContext);
  return <div className={styles.sidebar_root}>
    {
      (childPages && (childPages.length > 0 )) && <div className={styles.block}>
        <SidebarHeader>{alias}</SidebarHeader>
        <SideNavMenu {...{childPages, asPath}}/>
      </div>
    }
    {
      sidebarBlocks && sidebarBlocks.map((block) =>
        <SideBarBlock key={v4()} {...{block}}/>,
      )
    }
  </div>;
};

export default React.memo(Sidebar);
