import {API_URLS} from '../const/const';

const handleLogon = (target) => {
  const normalizedTarget = target.elements ?
   target.elements :
   target.current.elements;
  const {
    username: {value: username},
    password: {value: password},
  } = normalizedTarget;

  // console.log(useRequest({url: API_URLS.LOGON}));
  return false;
};

export default handleLogon;
