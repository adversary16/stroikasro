import React from 'react';
import styles from './SignupBlock.module.scss';
import captions from '../../locales/ru/common.json';
import useTranslation from 'next-translate/useTranslation';

const SignupBlock = ({}) => {
  const {t} = useTranslation('common');
  return <div className={styles.signupBlock_root}>
    <div className={styles.column_left}>
      <input type='text' placeholder={captions.inn_placeholder}></input>
      <input type='phone' placeholder={captions.phone_placeholder}></input>
      <input type='text' placeholder={captions.name_placeholder}></input>
      <input type="button" value={t('joinus')}></input>
    </div>
    <div className={styles.column_right_center}>
      {t('signupCaption')}
    </div>
  </div>;
};

export default React.memo(SignupBlock);
