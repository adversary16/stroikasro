import {useRouter} from 'next/dist/client/router';
import React, {useContext} from 'react';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import {RouterContext} from '../../contexts/RouterContext';

const ContentPage = () => {
  const {asPath, currentPage} = useContext(RouterContext);
  return <>
    <ContentBlock {...{asPath, currentPage}}/>
  </>;
};

export default React.memo(ContentPage);
