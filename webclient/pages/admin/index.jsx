import React from 'react';
import {SERVERSIDE_BASEURL} from '../../const/const';
import {AdminContainer} from '../../containers';

function Admin(props) {
  return <AdminContainer {...props}/>;
}

export async function getServerSideProps(context) {
  const {cookie} = context.req.headers;
  const token = cookie ? cookie.split('token=').splice(-1, 1) : null;
  const url = `${SERVERSIDE_BASEURL}/admin/getDashboard`;

  const method = 'post';
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token,
  };
  const body = JSON.stringify({route: context.query.contentPage});
  const getPage = await fetch(url, {
    method, headers, body,
  });
  const content = await getPage.json();

  return {
    props: {
      content,
      token,
    },
  };
}


export default Admin;
