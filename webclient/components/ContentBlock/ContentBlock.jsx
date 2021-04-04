import React from 'react';
import styles from './ContentBlock.module.scss';

const ContentBlock = (props) => {
  return <div className={styles.contentBlock_root}>
    {props.asPath}
  </div>;
};

export default React.memo(ContentBlock);
