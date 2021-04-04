import {Router, useRouter} from 'next/dist/client/router';
import React from 'react';
const RouterContext = React.createContext({});

const RouterContextProvider = ({children}) => {
  const router = useRouter();
  const {
    asPath,
    content,
  } = router;
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
