import React from 'react';
import {v4} from 'uuid';
import styles from './StructureDashboard.module.scss';

const getRootItems = ({structure}) => {
  const {children: rootItems} = structure.find(({_id}) => _id === null);
  const getTree = rootItems.map((item) => {
    const {children} = getChildren({_id: item._id, structure});
    return ( {...item, children});
  });
  return getTree;
};

const getChildren = ({_id, structure}) => {
  const matching = structure.find(({_id: parentId}) => _id === parentId);
  return matching || {children: null};
};

const StructureDashboard = ({structure, t}) => {
  const rootItems = getRootItems({structure});

  return <div className={styles.root}>
    <div className={styles.header}>
      {t('structureHeader')}
    </div>
    <div className={styles.list}>
      {
        rootItems.map(({link, alias, _id, children}) =>
          <div
            className={styles.entry}
            key={v4()}
          >
            <div className={styles.main}>
              <span className={styles.alias}>{alias}</span>
              <span className={styles.link}>{link}</span>
            </div>
            {
              children &&
              <div className={styles.sublist}>
                {
                  children.map(({link, alias}) =>
                    <div
                      className={styles.subentry}
                      key={v4()}
                    >
                      <span className={styles.alias}>{alias}</span>
                      <span className={styles.link}>{link}</span>
                    </div>,

                  )
                }
              </div>
            }

          </div>,
        )}

    </div>
  </div>;
};
export default StructureDashboard;
