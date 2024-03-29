import classNames from 'classnames';
import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './Logonbox.module.scss';
import {v4} from 'uuid';
import handleLogon from '../../utils/logon';
import waitForKey from '../../utils/waitForKey';
import {AuthContext} from '../../contexts/AuthContext';
import {getFormValues} from '../../helpers/getFormValues';
import {useRouter} from 'next/dist/client/router';
import {UserMenu} from '../UserMenu';

const LogOnForm = () => {
  const logonForm = useRef(null);
  const [creds, setCreds] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const {logonQuery, authToken, isLoggedIn} = useContext(AuthContext);
  const loginOnEnter = waitForKey.bind(this,
      {
        targetRef: logonForm,
        preventDefault: true,
        keyCode: 13,
        callback: logonQuery,
        args: {body: {...creds}},
      });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setCreds({...creds, [name]: value});
  };
  return <>
    {
      isPopupOpen &&
      <form className={styles.logon}
        onSubmit={handleLogon}
        onKeyDown={loginOnEnter} id={v4()}
        method={'post'}
        ref={logonForm}
      >
        <input
          onChange={handleChange}
          name='username'
          type="text"
          tabIndex={0}
          className={styles.login}>
        </input>
        <input
          onChange={handleChange}
          name='password'
          type="password"
          tabIndex={1}
          className={styles.password}>
        </input>
      </form>}
    <div
      className={classNames(styles.icon, isLoggedIn && styles.authorized)}
      tabIndex={2}
      onClick = {()=>{
        isLoggedIn ?
        router.push('/admin') :
       setIsPopupOpen(!isPopupOpen);
      }}
    ></div>
  </>;
};

const Logonbox = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [creds, setCreds] = useState({});
  const router = useRouter();
  const {logonQuery, authToken, isLoggedIn} = useContext(AuthContext);
  return <div className={
    classNames(styles.logonbox_root)
  }>
    { isLoggedIn ?
    <UserMenu/> :
    <LogOnForm/>
    }
  </div>;
};

export default React.memo(Logonbox);
