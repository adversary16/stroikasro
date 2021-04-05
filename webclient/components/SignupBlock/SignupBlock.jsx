import React from 'react';
import styles from './SignupBlock.module.scss';
import captions from '../../locales/ru/common.json';

const SignupBlock = ({}) => {
  return <div className={styles.signupBlock_root}>
    <input type='text' placeholder={captions.inn_placeholder}></input>
    <input type='phone' placeholder={captions.phone_placeholder}></input>
  </div>;
};

export default React.memo(SignupBlock);
