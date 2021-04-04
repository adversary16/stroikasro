import {Router, useRouter} from 'next/dist/client/router';
import React from 'react';
const RouterContext = React.createContext({});

const RouterContextProvider = ({children}) => {
  const {asPath} = useRouter();
  const value = {
    asPath,
  };
  return <RouterContext.Provider
    value={value}
  >
    {children}
  </RouterContext.Provider>;
};

export {RouterContextProvider, RouterContext};
