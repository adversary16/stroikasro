import React from 'react';
import App, {Container} from 'next/app';
import '../styles/remote.scss';
import '../styles/styles.css';
import BasicContainer from '../containers/BasicContainer';
import Header from '../components/Header/Header';
import {RouterContextProvider} from '../contexts/RouterContext';

const MyApp = ({Component, pageProps}) => {
  return (
    <RouterContextProvider>
      <BasicContainer>
        <Header/>
        <Component {...pageProps}/>
      </BasicContainer>
    </RouterContextProvider>
  );
};


export default MyApp;
