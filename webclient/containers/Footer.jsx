import React from 'react';
import styles from './Footer.module.scss';

const FooterContainer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.about}>
        СРО "Стройка" <br/>
        Лицензия Минстроя РФ №1234569 <br/>
        Выд. 21.06.2021
      </div>
      <div className={styles.contacts}>
        Телефон: 8 800 123 456 78
        Санкт-Петербург, <br/>
        улица Всеволода Вишневского, 15 <br/>
        <a href="mailto://some@email.com">some@email.com</a>
      </div>
    </div>
  );
};

export default FooterContainer;
