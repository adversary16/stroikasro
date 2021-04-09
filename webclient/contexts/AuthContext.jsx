import React, {useEffect, useState} from 'react';
import cookies from 'next-cookies';
import {API_URLS} from '../const/const';
import {useRequest} from '../hooks/useRequest';
import {useCookies} from 'react-cookie';

const AuthContext = React.createContext();


const AuthContextProvider = ({children}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['stroikasro']);
  const [isLoggedIn, setIsloggedIn] = useState(true);
  const [authToken, setAuthToken] = useState(cookies.token);
  const {
    actions: {sendQuery: logonQuery, setAuthToken: setToken},
    state: {result: logonResult},
  } = useRequest({
    url: API_URLS.LOGON,
    data: {},
    method: 'POST'},
  );
  useEffect(() => {
    if (logonResult && logonResult.token) {
      const {token} = logonResult;
      token && setAuthToken(logonResult.token);
    }
  }, [logonResult]);

  useEffect(() => {
    if (authToken) {
      setCookie('token', authToken);
      setIsloggedIn(true);
    }
  }, [authToken]);

  useEffect(() => {
    const {token} = cookies;
    if (token) {
      logonQuery({body: {token: token}});
    } else {
      setIsloggedIn(false);
    }
  }, []);

  return <AuthContext.Provider
    value = {
      {
        logonQuery,
        authToken,
        isLoggedIn,
      }
    }
  >
    {children}
  </AuthContext.Provider>;
};

export {AuthContext, AuthContextProvider};
