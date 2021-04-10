import {Router, useRouter} from 'next/dist/client/router';
import React, {useContext, useEffect} from 'react';
import {SECURE_ROUTES} from '../const/const';
import navStructure from '../const/routes';
import {AuthContext} from './AuthContext';
const RouterContext = React.createContext({});

const RouterContextProvider = ({children}) => {
  const router = useRouter();
  const {isLoggedIn} = useContext(AuthContext);
  const {
    asPath: rawAsPath,
    content,
  } = router;
  const defaultPage = Object.keys(navStructure).reduce((acc, item) =>
    (navStructure[item].isIndex ? [...acc, navStructure[item]] : [...acc])
  , [])[0];
  const asPath = rawAsPath.split('/')[1];
  const {childPages} = navStructure[asPath] || {};

  const value = {
    asPath,
    childPages,
    currentPage: navStructure[asPath] || defaultPage,
  };

  useEffect(() => {
    if (SECURE_ROUTES.includes(asPath) && !isLoggedIn) {
      router.push('/');
    }
  }, []);

  return <RouterContext.Provider
    value={value}
  >
    {children}
  </RouterContext.Provider>;
};

export {RouterContextProvider, RouterContext};
