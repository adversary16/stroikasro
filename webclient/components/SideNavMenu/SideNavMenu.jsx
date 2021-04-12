import React from 'react';
import {v4} from 'uuid';
import styles from './SideNavMenu.module.scss';

const SideNavMenu = (props) => {
  const {childPages, asPath} = props;
  return <div className={styles.sideNavMenu_root}>
    {Object.values(childPages).map(({alias, link}) => <a href={`${asPath}/${link}`} key={v4()}>
      {alias}
    </a>)}
  </div>;
};

export default React.memo(SideNavMenu);
