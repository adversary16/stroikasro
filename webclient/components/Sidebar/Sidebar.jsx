import React, {useContext} from 'react';
import {RouterContext} from '../../contexts/RouterContext';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const {asPath} = useContext(RouterContext);
  return <div className={styles.sidebar_root}>
    This is a sidebar
  </div>;
};

export default React.memo(Sidebar);
