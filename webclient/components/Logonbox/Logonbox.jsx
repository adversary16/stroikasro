import React from 'react';
import styles from './Logonbox.module.scss';

const Logonbox = () => {
  return <div className={styles.logonbox_root}>
    <div className={styles.icon}></div>
  </div>;
};

export default React.memo(Logonbox);
