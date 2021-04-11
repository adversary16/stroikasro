import {Router, useRouter} from 'next/dist/client/router';
import React, {useContext, useEffect, useState} from 'react';
import {BASEURL, SECURE_ROUTES} from '../const/const';
import navStructure from '../const/routes';
import {useRequest} from '../hooks/useRequest';
import {AuthContext} from './AuthContext';
const RouterContext = React.createContext({});

const RouterContextProvider = ({children}) => {
  const router = useRouter();
  const {isLoggedIn} = useContext(AuthContext);
  const [activePage, setActivePage] = useState({});
  const {
    asPath: rawAsPath,
  } = router;
  const defaultPage = Object.keys(navStructure).reduce((acc, item) =>
    (navStructure[item].isIndex ? [...acc, navStructure[item]] : [...acc])
  , [])[0];
  const deconstructedPath = rawAsPath.split('/');
  const asPath = deconstructedPath[1];
  const subPath = deconstructedPath.splice(1, deconstructedPath.length -1);
  const {childPages} = navStructure[asPath] || {};

  const {
    actions: {sendQuery},
    state: {result},
  } = useRequest({
    url: `${BASEURL}/${SECURE_ROUTES.includes(asPath) ? asPath : 'content/'}`,
    method: 'POST',
    body: asPath,
  });

  const value = {
    asPath,
    childPages,
    currentPage: navStructure[asPath] || defaultPage,
    activePage,
  };

  useEffect( async () => {
    if (SECURE_ROUTES.includes(asPath) && !isLoggedIn) {
      router.push('/');
    }
    if (asPath !== '[...contentPage]') {
      const receivedPage = await sendQuery({body: {route: subPath}});
      setActivePage({...receivedPage});
    }
  }, [asPath]);

  return <RouterContext.Provider
    value={value}
  >
    {children}
  </RouterContext.Provider>;
};

export {RouterContextProvider, RouterContext};
