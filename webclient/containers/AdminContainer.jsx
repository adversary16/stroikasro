import React from 'react';
import {AdminNavMenu} from '../components/AdminNavMenu';
import useTranslation from 'next-translate/useTranslation';
import {StructureDashboard} from '../components/StructureDashboard';
import {RosterDashboard} from '../components/RosterDashboard';
import styles from './AdminContainer.module.scss';

const AdminContainer = ({children, content, token}) => {
  const {structure, roster} = content;
  const {t} = useTranslation('admin');
  return <>
    <AdminNavMenu t={t}/>
    <div className={styles.root}>
      <StructureDashboard { ...{structure, t}}/>
      <RosterDashboard {...{t}}/>
    </div>
  </>;
};


export default AdminContainer;
