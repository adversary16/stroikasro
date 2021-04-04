import {Router, useRouter} from 'next/dist/client/router';
import React from 'react';
import navStructure from '../const/routes';
const RouterContext = React.createContext({});

const RouterContextProvider = ({children}) => {
  const router = useRouter();
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
  return <RouterContext.Provider
    value={value}
  >
    {children}
  </RouterContext.Provider>;
};

export {RouterContextProvider, RouterContext};
