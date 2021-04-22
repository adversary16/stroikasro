import React from 'react';
import styles from './RosterDashboard.module.scss';
const RosterDashboard = ({t}) => {
  return <div className={styles.root}>
    <div className={styles.header}>
      {t('previewHeader')}
    </div>
  </div>;
};
export default RosterDashboard;
