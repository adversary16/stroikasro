import React, {useEffect, useState} from 'react';
import cookies from 'next-cookies';
import {API_URLS} from '../const/const';
import {useRequest} from '../hooks/useRequest';
import {useCookies} from 'react-cookie';

const COOKIES_OPTIONS = {
  path: '/',
};

const AuthContext = React.createContext();


const AuthContextProvider = (props) => {
  const {children, token} = props;
  const [cookies, setCookie, removeCookie] = useCookies(['stroikasro']);
  const [isLoggedIn, setIsloggedIn] = useState((cookies.token !== undefined));
  const [authToken, setAuthToken] = useState(token);
  const {
    actions: {sendQuery: logonQuery, setAuthToken: setToken},
    state: {result: logonResult},
  } = useRequest({
    url: API_URLS.LOGON,
    data: {token},
    method: 'POST',
    token},
  );
  useEffect(() => {
    if (logonResult && logonResult.token) {
      const {token} = logonResult;
      token && setAuthToken(logonResult.token);
    }
  }, [logonResult]);

  useEffect(() => {
    if (authToken) {
      setCookie('token', authToken, COOKIES_OPTIONS);
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
