import React from 'react';
import App, {Container} from 'next/app';
import '../styles/remote.scss';
import '../styles/styles.css';

const MyApp = ({Component, pageProps}) => {
  return <Component {...pageProps}/>;
};


export default MyApp;
