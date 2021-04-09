import classNames from 'classnames';
import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './Logonbox.module.scss';
import {v4} from 'uuid';
import handleLogon from '../../utils/logon';
import waitForKey from '../../utils/waitForKey';
import {AuthContext} from '../../contexts/AuthContext';
import {getFormValues} from '../../helpers/getFormValues';

const Logonbox = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [creds, setCreds] = useState({});
  const {logonQuery, authToken, isLoggedIn} = useContext(AuthContext);
  const logonForm = useRef(null);
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

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  return <div className={
    classNames(styles.logonbox_root)
  }>
    {
      isPopupOpen &&
      <form className={styles.logon}
        onSubmit={handleLogon}
        onKeyDown={loginOnEnter} id={v4()}
        method={'post'}
        ref={logonForm}
      >
        <input onChange={handleChange} name='username' type="text" className={styles.login}></input>
        <input onChange={handleChange} name='password' type="password" className={styles.password}></input>
      </form>}
    <div
      className={classNames(styles.icon, isLoggedIn ? styles.authorized : null)}
      onClick = {()=>{
        setIsPopupOpen(!isPopupOpen);
      }}
    ></div>
  </div>;
};

export default React.memo(Logonbox);
