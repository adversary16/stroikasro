import React from 'react';
import {BASEURL} from '../../const/const';
import styles from './Banner.module.scss';

const Banner = ({image, link, caption}) => {
  return (
    <div className={styles.banner} style={{'--bg': `url(${BASEURL}${image})`}}>
      <a href={link} className={styles.clickableWrapper}>
        <span className={styles.caption}>
          {caption}
        </span>
      </a>
    </div>
  );
};

export default React.memo(Banner);
