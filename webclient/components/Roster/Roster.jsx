import React, {useState} from 'react';
import styles from './Roster.module.scss';
import classNames from 'classnames';

const TableRow = (props) => {
  const {
    shortname,
    longname,
    inn,
    ogrn,
    type,
    ownership,
    active,
    t,
  } = props;
  const shortTitle = [t(`ownership.${ownership}.short`), shortname].join(' ');
  const fullTitle = [t(`ownership.${ownership}.full`), longname].join(' ');
  const statusCaption = active ?
  t('status.active') :
  t('status.inactive');
  return <div className={styles.row}>
    <div className={styles.cardheader}>
      <div className={styles.title}>
        <span> {shortTitle} </span>
        <span
          className={
          active ? styles.active :
          styles.inactive }
        >{statusCaption}</span>
      </div>
      <div className={styles.subitle}>
        {fullTitle}
      </div>
    </div>
    <div className={styles.cardBody}>
      {inn}
      {ogrn}
    </div>
  </div>;
};

const Roster = ({members, t}) => {
  const [membersList, setMembersList] = useState(members);
  return <div className={styles.root}>
    <div className={styles.header}>
      {t('rosterTitle')}
    </div>
    <div className={styles.searchBar}>
      <input type='text'/>
    </div>
    <div className={styles.table}>
      {
        membersList && membersList.map(
            (member, index) =>
              <TableRow key={`${index}_row`} {...{...member, t}}/>,
        )
      }
    </div>
  </div>;
};
export default Roster;
