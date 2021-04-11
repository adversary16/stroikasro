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
  const {activePage} = useContext(RouterContext);
  const [currentContent, setCurrentContent] = useState([]);


  useEffect(() => {
    const {content} = activePage;
    if (content) {
      const processedContent = content.reduce((acc, contentItem) => {
        const processedContentItem = {...contentRouter({content: contentItem}), key: v4()};
        return (processedContentItem ? [...acc, processedContentItem] : [...acc]);
      }, []);
      setCurrentContent(processedContent);
    }
  }, [activePage]);
  return <div className={styles.contentBlock_root}>
    {currentContent.map((Unit) => {
      return Unit;
    },
    )}
  </div>;
};

export default React.memo(ContentBlock);
