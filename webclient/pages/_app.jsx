import React, {useEffect} from 'react';
import App, {Container} from 'next/app';
import '../styles/remote.scss';
import '../styles/styles.css';
import BasicContainer from '../containers/BasicContainer';
import styles from '../styles/remote.scss';
import Header from '../components/Header/Header';
import {RouterContextProvider} from '../contexts/RouterContext';
import Sidebar from '../components/Sidebar/Sidebar';
import {AuthContext, AuthContextProvider} from '../contexts/AuthContext';
import {useCookies} from 'react-cookie';
import {useRequest} from '../hooks/useRequest';
import {API_URLS} from '../const/const';
import cookies from 'next-cookies';
import FooterContainer from '../containers/Footer';

function SafeHydrate({children}) {
  return (
    <div id="__nossr" suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

const MyApp = ({Component, pageProps}) => {
  return (
    <SafeHydrate>
      <AuthContextProvider>
        <RouterContextProvider>
          <Header/>
          <BasicContainer>
            <Component {...pageProps}/>
          </BasicContainer>
          <Sidebar/>
          <FooterContainer/>
        </RouterContextProvider>
      </AuthContextProvider>
    </SafeHydrate>
  );
};

export default MyApp;
