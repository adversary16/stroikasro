import React, {useContext} from 'react';
import HTMLcontent from '../../common/HTMLcontent';
import {RouterContext} from '../../contexts/RouterContext';
import styles from './ContentBlock.module.scss';

const ContentBlock = (props) => {
  const {currentPage: {alias, content}} = useContext(RouterContext);
  return <div className={styles.contentBlock_root}>
    <HTMLcontent {...{content}}/>
  </div>;
};

export default React.memo(ContentBlock);
