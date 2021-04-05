import classNames from 'classnames';
import React, {useEffect, useState} from 'react';
import styles from './Logonbox.module.scss';

const Logonbox = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {

  }, isPopupOpen);
  return <div className={
    classNames(styles.logonbox_root, isPopupOpen && styles.loggedIn)
  }>
    {
      isPopupOpen && <div className={styles.logon}>
        <input type="text" className={styles.login}></input>
        <input type="password" className={styles.password}></input>
      </div>}
    <div
      className={classNames(styles.icon)}
      onClick = {()=>{
        setIsPopupOpen(!isPopupOpen);
      }}
    ></div>
  </div>;
};

export default React.memo(Logonbox);
