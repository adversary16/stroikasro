import React, {useContext, useEffect, useState} from 'react';
import {v4} from 'uuid';
import {RouterContext} from '../../contexts/RouterContext';
import contentRouter from '../../utils/ContentRouter';
import styles from './ContentBlock.module.scss';

const ContentBlock = (props) => {
  const {
    currentPage: {
      alias, content=[],
    },
  } = props;
  const processedContent = content.reduce((acc, contentItem) => {
    const processedContentItem = {...contentRouter({content: contentItem}), key: v4()};
    return (processedContentItem ? [...acc, processedContentItem] : [...acc]);
  }, []);

  return <div className={styles.contentBlock_root}>
    {processedContent.map((Unit) => {
      return Unit;
    },
    )}
  </div>;
};

export default React.memo(ContentBlock);
