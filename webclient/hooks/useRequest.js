import {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from '../contexts/AuthContext';


export const useRequest = ({data, method, url}) => {
  const [result, setResult] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const sendQuery = useCallback( async ({body} = data) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
    if (authToken) headers['Authorization'] = authToken;
    const processedBody = JSON.stringify(body);
    const query = method === 'GET' ?
    {
      method, headers, query: processedBody,
    } :
    {
      method, headers, body: processedBody,
    };
    const res = await fetch(url,
        {...query});
    const resJson = await res.json();
    setResult(resJson);
    return resJson;
  }, [data, method, url, authToken]);

  return {
    actions: {
      sendQuery,
      setAuthToken,
    },
    state: {
      result,
    },
  };
};


