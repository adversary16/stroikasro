import React, {useState} from 'react';
import Link from 'next/link';
import {v4} from 'uuid';
import styles from './StructureDashboard.module.scss';
import {AddButton, DeleteButton, EditButton} from '../Buttons/Buttons';

const getRootItems = ({structure}) => {
  console.log(structure);
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

const getContent = async (event) => {
  const {id: contentId} = event.target;
  console.log(contentId);
};

const AddItem = ({onClick}) => {
  return <AddButton className={styles.addChild} onClick={onClick}/>;
};

const StructureDashboard = ({structure, t}) => {
  const [isEditingMode, setIsEditingMode] = useState(false);
  const toggleEditingMode = () =>
    setIsEditingMode((isEditingMode) => !isEditingMode);
  const rootItems = getRootItems({structure});

  return <div className={styles.root}>
    <div className={styles.header}>
      {t('structureHeader')}
      <div className={styles.buttons}>
        <EditButton onClick={toggleEditingMode}/>
        <AddButton/>
      </div>
    </div>
    <div className={styles.list}>
      {
        rootItems.map(({link, alias, _id, children}) =>
          <div
            className={styles.entry}
            key={v4()}
          >
            <div className={styles.main} id={_id}>
              <Link href={`/admin/edit/${_id}`}>
                <>
                  <span className={styles.alias}>{alias}</span>
                  <span className={styles.link}>{link}</span>
                </>
              </Link>
              { isEditingMode && <DeleteButton/>}
            </div>
            {
              children &&
              <div className={styles.sublist}>
                {
                  children.map(({link, _id, alias}) =>
                    <Link href={`/admin/edit/${_id}`} key={link}>
                      <div
                        className={styles.subentry}
                        id={_id}
                      >
                        <span className={styles.alias}>{alias}</span>
                        <span className={styles.link}>{link}</span>
                      </div>
                    </Link>,

                  )
                }
              </div>
            }
            <AddItem/>
          </div>,
        )}

    </div>
  </div>;
};
export default StructureDashboard;
