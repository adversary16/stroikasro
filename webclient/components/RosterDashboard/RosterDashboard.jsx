import useTranslation from 'next-translate/useTranslation';
import React, {useState} from 'react';
import {AddCompanyForm} from '../AddCompanyForm';
import {AddButton} from '../Buttons/Buttons';
import {Modal} from '../Modal';
import styles from './RosterDashboard.module.scss';

const RosterEditPopup = ({hidePopup}) => {
  return <Modal
    onClickOutside={hidePopup}>
    <AddCompanyForm/>
  </Modal>;
};

const CompanyEntry = ({company, t}) => {
  const {_id, shortname, inn, type, ownership} = company;
  const {t: c} = useTranslation('common');
  return <div className={styles.entry}>
    <div className={styles.main}>
      <span className={styles.companyname}>
        {c(`ownership.${type}.withName`, {shortname})}
      </span>
    </div>
  </div>;
};

const RosterDashboard = ({t, companies}) => {
  const [companyList, setCompanyList] = useState(companies);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const showPopup = () => setIsPopupOpen(true);
  const hidePopup = () => setIsPopupOpen(false);
  const toggleEditingMode = () =>
    setIsEditingMode((isEditingMode) => !isEditingMode);
  return <>
    <div className={styles.root}>
      <div className={styles.header}>
        {t('rosterHeader')}
        <AddButton onClick={showPopup}/>
      </div>
      <div className={styles.list}>
        {
          companyList.map((company) =>
            <CompanyEntry key={company._id} company={company} t={t}/>,
          )

        }
      </div>
    </div>
    {
      isPopupOpen && <RosterEditPopup hidePopup={hidePopup}/>
    }
  </>;
};
export default RosterDashboard;
