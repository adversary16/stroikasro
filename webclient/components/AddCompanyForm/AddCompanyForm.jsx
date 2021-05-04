import useTranslation from 'next-translate/useTranslation';
import React, {useCallback, useContext, useRef, useState} from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import {BASEURL, SERVERSIDE_BASEURL} from '../../const/const';
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

const DEFAULT_TYPES = ['text', 'number'];


const DynamicDropdown = (props) => {
  const {name, placeholder} = props;
  const {t: c} = useTranslation('common');
  const {values} = ORGANIZATION[name];
  return <select name={name} id={name} placeholder={placeholder} className={styles.dropper}>
    {
      values.map((value) =>
        <option name={name} key={`${value}${name}`} value={value}>{c(`${name}.${value}.short`)}</option>,
      )
    }
  </select>;
};

const InputByType = (props) => {
  const {t: c} = useTranslation('common');
  const {type, name, key, ...rest} = props;
  switch (type) {
    case 'text':
      return <input {...props}/>;
    case 'number':
      return <input {...props}/>;
    case 'boolean':
      return <>
        <label htmlFor={rest.id}>Действующий член СРО?
          <input type="checkbox" {...rest}/>
        </label>
      </>;
    case 'enum':
      return <DynamicDropdown {...props}/>;
    default:
      return <><input {...rest}/></>;
  }
};

const InputFields = ({onChange, t}) => {
  const {t: c} = useTranslation('datatypes');
  return <>
    {Object.entries(ORGANIZATION).map(([key, value]) =>
      <div className={styles.field} key={key}>
        <InputByType
          type={ORGANIZATION[key].type}
          id={key}
          name={key}
          placeholder={c(key)}
        />
      </div>,
    )}
  </>;
};

const AddCompanyForm = ({onDone}) => {
  const companyForm = useRef(null);
  const {t} = useTranslation('admin');
  const [currentValues, setCurrentValues] = useState(DEFAULT_VALUES);
  const {authToken} = useContext(AuthContext);
  const submitForm = useCallback( async () => {
    const {current: values} = companyForm;
    const payload = [...values].reduce((acc, item )=> {
      const {name, value} = item;
      return {...acc, [name]: value};
    }, {});
    const url = `${BASEURL}/admin/companies/`;
    const method = 'put';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authToken,
    };
    const body = JSON.stringify({...payload});
    onDone();
    return await fetch(url, {
      method, headers, body,
    });
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
