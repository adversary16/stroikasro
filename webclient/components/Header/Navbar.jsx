import React, {useContext} from 'react';
import navStructure from '../../const/routes';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import {v4 as uuidv4} from 'uuid';
import {useRouter} from 'next/dist/client/router';
import {RouterContext} from '../../contexts/RouterContext';


const Navbar = () => {
  const pages = navStructure;
  const {asPath} = useContext(RouterContext);
  return (
    <div className={styles.navBar_root}>{
      Object.keys(pages).map( (item) =>
        <a href={`/${item}`}
          className={classNames(styles.link, (asPath === item || !asPath && pages[item].isIndex) && styles.current)}
          key={uuidv4()}
        >
          {pages[item].alias}
        </a>)
    }
    </div>
  );
};

export default React.memo(Navbar);
