import React, {Component} from 'react';
import HTMLcontent from '../common/HTMLcontent';
import SignupBlock from '../components/SignupBlock/SignupBlock';


const contentRouter = ({content}) => {
  const {type, value} = content;
  switch (type) {
    case 'html':
      return <HTMLcontent {...{content: value}}/>;
      break;
    case 'block':
      return <SignupBlock/>;
      break;
    default:
      return false;
      break;
  }
};

export default contentRouter;
