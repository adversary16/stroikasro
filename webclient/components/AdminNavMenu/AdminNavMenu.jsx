import React from 'react';
import styles from './AdminNavMenu.module.scss';

const AdminNavMenu = ({t}) => {
  return <div
    className={styles.root}
  >
    <a href="/admin/structure">
      {t('structure')}
    </a>
    <a href="/admin/roster">
      {t('roster')}
    </a>
  </div>;
};

export default AdminNavMenu;
