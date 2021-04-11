import React, {useContext} from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames';
import {v4 as uuidv4} from 'uuid';
import {useRouter} from 'next/dist/client/router';
import Link from 'next/link';
import {RouterContext} from '../../contexts/RouterContext';


const Navbar = () => {
  const {structure} = useContext(RouterContext);
  const {asPath} = useContext(RouterContext);
  return (
    <div className={styles.navBar_root}>{
      Object.values(structure).map( ({alias, link, isIndex}) =>
        <Link
          href={`/${link}`}
          as={`/${link}`}
          key={uuidv4()}
        >
          <a
            className={
              classNames(styles.link,
                  (asPath === link || !asPath && isIndex) &&
                  styles.current)}>
            {alias}
          </a>
        </Link>)
    }
    </div>
  );
};

export default React.memo(Navbar);
