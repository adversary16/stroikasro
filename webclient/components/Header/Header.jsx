import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return <div className={styles.headerWrapper}>
    i am a header
  </div>;
};

export default React.memo(Header);
