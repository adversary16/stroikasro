import React from 'react';
import styles from './BasicContainer.module.scss';

const BasicContainer = ({children}) => {
  return <div className={styles.basicContainer}>{children}</div>;
};

export default React.memo(BasicContainer);
