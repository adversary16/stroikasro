import {useCallback, useEffect, useState} from 'react';


export const useRequest = ({data, method, url}) => {
  const [result, setResult] = useState(null);

  const sendQuery = useCallback( async ({body} = {body: data}) => {
    console.log(body);
    const processedBody = JSON.stringify(body);
    const res = await fetch(url, {method, headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }, body: processedBody});
    const resJson = await res.json();
    setResult(resJson);
    return resJson;
  }, [data, method, url]);

  return {
    actions: {
      sendQuery,
    },
    state: {
      result,
    },
  };
};


