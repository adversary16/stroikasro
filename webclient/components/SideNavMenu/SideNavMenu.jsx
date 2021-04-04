import React from 'react';
import {v4} from 'uuid';
import styles from './SideNavMenu.module.scss';

const SideNavMenu = (props) => {
  const {childPages} = props;
  return <div className={styles.sideNavMenu_root}>
    {Object.keys(childPages).map((item) => <a href={`${item}`} key={v4()}>
      {childPages[item].alias}
    </a>)}
  </div>;
};

export default React.memo(SideNavMenu);
