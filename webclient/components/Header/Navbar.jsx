import React, {useContext} from 'react';
import navStructure from '../../const/routes';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import {v4 as uuidv4} from 'uuid';
import {useRouter} from 'next/dist/client/router';
import Link from 'next/link';
import {RouterContext} from '../../contexts/RouterContext';


const Navbar = () => {
  const pages = navStructure;
  const {asPath} = useContext(RouterContext);
  return (
    <div className={styles.navBar_root}>{
      Object.keys(pages).map( (item) =>
        <Link
          href={`/${item}`}
          as={`/${item}`}
          key={uuidv4()}
        >
          <a
            className={
              classNames(styles.link,
                  (asPath === item || !asPath && pages[item].isIndex) &&
                  styles.current)}>
            {pages[item].alias}
          </a>
        </Link>)
    }
    </div>
  );
};

export default React.memo(Navbar);
