import Link from 'next/link';
import React from 'react';
import styles from './UserMenu.module.scss';
import useTranslation from 'next-translate/useTranslation';
const UserMenu = () => {
  const {t} = useTranslation('common');
  return <div className={styles.root}>
    <div className={styles.user}>Hello user</div>
    <div className={styles.links}>
      <Link
        href='/admin'
      >{t('adminPageLink')}
      </Link>
    </div>
  </div>;
};
export default UserMenu;
