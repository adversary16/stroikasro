import React, {useState} from 'react';
import {AddButton} from '../Buttons/Buttons';
import styles from './RosterDashboard.module.scss';
const RosterDashboard = ({t}) => {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const toggleEditingMode = () =>
    setIsEditingMode((isEditingMode) => !isEditingMode);
  return <div className={styles.root}>
    <div className={styles.header}>
      {t('rosterHeader')}
      <AddButton/>
    </div>
  </div>;
};
export default RosterDashboard;
