import React, {useState} from 'react';
import styles from './UsersDashboard.module.scss';
import classNames from 'classnames';
import {AddButton, FilterButton, SearchButton} from '../../components/Buttons/Buttons';

const PlaceHolder = ({t}) => {
  return <div className={styles.placeholder}>
    {t('previewPlaceholder')}
  </div>;
};

const UserEntry = ({user}) => {
  const {email, role} = user;
  return <div className={styles.entry}>
    <div className={styles.main}>
      <span className={styles.email}>{email}</span>
      <span className={classNames(styles.email, styles[role])}>
        {role}
      </span>
    </div>
  </div>;
};

const UsersDashboard = ({t, users}) => {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const toggleEditingMode = () =>
    setIsEditingMode((isEditingMode) => !isEditingMode);
  return <div className={styles.root}>
    <div className={styles.header}>
      {t('usersHeader')}
      <div className={styles.buttons}>
        <SearchButton/>
        <FilterButton/>
        <AddButton/>
      </div>
    </div>
    <div className={styles.list}>
      {users.map((user) => <UserEntry user={user} key={user._id}/>)}
    </div>
  </div>;
};

export default UsersDashboard;
