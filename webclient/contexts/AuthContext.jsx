import React, {useEffect} from 'react';
import {API_URLS} from '../const/const';
import {useRequest} from '../hooks/useRequest';

const AuthContext = React.createContext({});


const AuthContextProvider = ({children}) => {
  const {
    actions: {sendQuery: logonQuery},
    state: {result: logonResult},
  } = useRequest({
    url: API_URLS.LOGON,
    data: {username: 'test'},
    method: 'POST'},
  );

  useEffect(() => {
    console.log(logonResult);
  }, [logonResult]);

  useEffect(() => {
    logonQuery();
  }, []);
  return <AuthContext.Provider
    value = {
      {logonQuery}
    }
  >
    {children}
  </AuthContext.Provider>;
};

export {AuthContext, AuthContextProvider};
