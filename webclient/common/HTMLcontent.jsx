import React from 'react';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';

const HTMLcontent = ({content}) => {
  const parsedContent = ReactHtmlParser(content);
  return <div>{parsedContent}</div>;
};

export default React.memo(HTMLcontent);
