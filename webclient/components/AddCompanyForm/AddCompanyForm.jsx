import useTranslation from 'next-translate/useTranslation';
import React, {useCallback, useRef, useState} from 'react';
import {ORGANIZATION} from '../../const/datatypes';
import styles from './AddCompanyForm.module.scss';
const DEFAULT_VALUES = {
  shortname: '',
  type: 1,
  ownership: 1,
  longname: '',
  inn: '00000000000',
  ogrn: '00000000000',
  active: true,
};

const InputFields = ({onChange, t}) => {
  const {t: c} = useTranslation('datatypes');
  return <>
    {Object.entries(ORGANIZATION).map(([key, value]) =>
      <div className={styles.field} key={key}>
        <input
          type='text'
          onType={onChange}
          id={key}
          name={key}
          placeholder={c(key)}
        />
      </div>,
    )}
  </>;
};

const AddCompanyForm = () => {
  const companyForm = useRef(null);
  const {t} = useTranslation('admin');
  const [currentValues, setCurrentValues] = useState(DEFAULT_VALUES);

  const submitForm = useCallback(()=>{
    const {current: values} = companyForm;
    const payload = [...values].reduce((acc, item )=> {
      const {name, value} = item;
      return {...acc, [name]: value};
    }, {});
  }, []);

  return <div className={styles.root}>
    <div className={styles.title}>
      {t('addCompany')}
    </div>
    <form ref={companyForm}>
      <div className={styles.details}>
        <InputFields onChange={()=>{}} t={t}/>
      </div>
    </form>
    <button onClick={submitForm}>{t('save')}</button>
  </div>;
};
export default AddCompanyForm;
