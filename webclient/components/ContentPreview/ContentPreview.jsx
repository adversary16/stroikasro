import React from 'react';
import styles from './ContentPreview.module.scss';

const PlaceHolder = ({t}) => {
  return <div className={styles.placeholder}>
    {t('previewPlaceholder')}
  </div>;
};

const ContentPreview = ({t}) => {
  return <div className={styles.root}>
    <div className={styles.header}>
      {t('previewHeader')}
    </div>
    <PlaceHolder {...{t}}/>
  </div>;
};

export default ContentPreview;
