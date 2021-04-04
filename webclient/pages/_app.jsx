import React from 'react';
import App, {Container} from 'next/app';
import '../styles/remote.scss';
import '../styles/styles.css';
import BasicContainer from '../containers/BasicContainer';
import Header from '../components/Header/Header';
import {RouterContextProvider} from '../contexts/RouterContext';
import Sidebar from '../components/Sidebar/Sidebar';

const MyApp = ({Component, pageProps}) => {
  return (
    <RouterContextProvider>
      <Header/>
      <BasicContainer>
        <Component {...pageProps}/>
      </BasicContainer>
      <Sidebar/>
    </RouterContextProvider>
  );
};


export default MyApp;
