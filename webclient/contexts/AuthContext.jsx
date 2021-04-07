import React, {useEffect, useState} from 'react';
import {API_URLS} from '../const/const';
import {useRequest} from '../hooks/useRequest';

const AuthContext = React.createContext({});


const AuthContextProvider = ({children}) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const {
    actions: {sendQuery: logonQuery, setAuthToken: setToken},
    state: {result: logonResult},
  } = useRequest({
    url: API_URLS.LOGON,
    data: {username: null},
    method: 'POST'},
  );

  useEffect(() => {
    if (logonResult && logonResult.token) {
      setIsloggedIn(true);
      setAuthToken(logonResult.token);
    } else {
      setIsloggedIn(false);
    }
  }, [logonResult]);

  useEffect(() => {
    setToken(authToken);
  }, [authToken]);

  useEffect(() => {
    logonQuery();
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
