import React from 'react';
import {AdminNavMenu} from '../components/AdminNavMenu';
import useTranslation from 'next-translate/useTranslation';
import {StructureDashboard} from '../components/StructureDashboard';
import {RosterDashboard} from '../components/RosterDashboard';
import styles from './AdminContainer.module.scss';
import {ContentPreview} from '../components/ContentPreview';
import {EditContentContextProvider} from '../contexts/EditContentContext';
import {UsersDashboard} from '../components/UsersDashboard';

const AdminContainer = ({children, content, token}) => {
  const {structure, roster, users} = content;
  const {t} = useTranslation('admin');
  return <>
    <EditContentContextProvider>
      <AdminNavMenu t={t}/>
      <div className={styles.root}>
        <StructureDashboard { ...{structure, t}}/>
        {/* <ContentPreview {...{t}}/> */}
        <RosterDashboard {...{t}}/>
        <UsersDashboard {...{t, users}}/>
      </div>
    </EditContentContextProvider>
  </>;
};


export default AdminContainer;
