import {useRouter} from 'next/dist/client/router';
import React, {useContext} from 'react';
import ContentBlock from '../../components/ContentBlock/ContentBlock';
import {BASEURL, SERVERSIDE_BASEURL} from '../../const/const';
import {RouterContext} from '../../contexts/RouterContext';

const ContentPage = (props) => {
  const {content, asPath} = props;
  return <>
    <ContentBlock {...{asPath, currentPage: content}}/>
  </>;
};

export async function getServerSideProps(context) {
  const {contentPage} = context.query;
  const url = `${SERVERSIDE_BASEURL}/content`;
  const method = 'post';
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({route: context.query.contentPage});
  const getPage = await fetch(url, {
    method, headers, body,
  });
  const content = await getPage.json();

  return {
    props: {
      content,
      asPath: contentPage[0],
    },
  };
}


export default React.memo(ContentPage);
