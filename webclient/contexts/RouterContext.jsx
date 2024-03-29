import {Router, useRouter} from 'next/dist/client/router';
import React, {useContext, useEffect, useState} from 'react';
import {BASEURL, SECURE_ROUTES} from '../const/const';
import navStructure from '../const/routes';
import {useRequest} from '../hooks/useRequest';
import {AuthContext} from './AuthContext';
const RouterContext = React.createContext({});

const RouterContextProvider = (props) => {
  const {children, content} = props;
  const router = useRouter();
  const {isLoggedIn, authToken: token} = useContext(AuthContext);
  const [activePage, setActivePage] = useState(content);
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
    actions: {sendQuery: getContent},
    state: {result},
  } = useRequest({
    url: `${BASEURL}/${SECURE_ROUTES.includes(asPath) ? asPath : 'content/'}`,
    method: 'POST',
    body: asPath,
    token,
  });

  const {
    actions: {
      sendQuery: getStructure,
    },
    state: {
      result: getStructureResult,
    },
  } = useRequest({
    url: `${BASEURL}/content/structure`,
    method: 'GET',
    data: '',
    token,
  });

  const [structure, setStructure] = useState([]);

  const value = {
    asPath,
    childPages,
    currentPage: navStructure[asPath] || defaultPage,
    activePage,
    structure,
  };

  useEffect( async () => {
    if (SECURE_ROUTES.includes(asPath) && !isLoggedIn) {
      router.push('/');
    }
    if (asPath !== '[...contentPage]') {
      const receivedPage = await getContent({body: {route: subPath}});
      setActivePage({...receivedPage});
    }
    const currentStructure = await getStructure({});
    setStructure(currentStructure);
  }, [asPath]);


  return <RouterContext.Provider
    value={value}
  >
    {children}
  </RouterContext.Provider>;
};

export {RouterContextProvider, RouterContext};
