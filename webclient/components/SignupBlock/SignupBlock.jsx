import React from 'react';
import styles from './SignupBlock.module.scss';
import captions from '../../locales/ru/common.json';

const SignupBlock = ({}) => {
  return <div className={styles.signupBlock_root}>
    <div className={styles.column_left}>
      <input type='text' placeholder={captions.inn_placeholder}></input>
      <input type='phone' placeholder={captions.phone_placeholder}></input>
      <input type='text' placeholder={captions.name_placeholder}></input>
    </div>
    <div className={styles.column_right_center}></div>
  </div>;
};

export default React.memo(SignupBlock);
