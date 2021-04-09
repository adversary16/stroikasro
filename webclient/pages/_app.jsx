import React, {useEffect} from 'react';
import App, {Container} from 'next/app';
import '../styles/remote.scss';
import '../styles/styles.css';
import BasicContainer from '../containers/BasicContainer';
import Header from '../components/Header/Header';
import {RouterContextProvider} from '../contexts/RouterContext';
import Sidebar from '../components/Sidebar/Sidebar';
import {AuthContext, AuthContextProvider} from '../contexts/AuthContext';
import {useCookies} from 'react-cookie';
import {useRequest} from '../hooks/useRequest';
import {API_URLS} from '../const/const';
import cookies from 'next-cookies';

const MyApp = ({Component, pageProps}) => {
  return (
    <AuthContextProvider>
      <RouterContextProvider>
        <Header/>
        <BasicContainer>
          <Component {...pageProps}/>
        </BasicContainer>
        <Sidebar/>
      </RouterContextProvider>
    </AuthContextProvider>
  );
};

export default MyApp;
