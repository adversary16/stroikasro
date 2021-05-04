import React, {useRef} from 'react';
import Portal from '../../hoc/Portal';
import styles from './Modal.module.scss';
import classNames from 'classnames';

const Modal = ({children, onClickOutside, onClose, contentContainerStyles}) => {
  const ref = useRef(null);
  return <Portal>
    <span onClick={(e) => {
      e.preventDefault(); onClickOutside();
    }} className={styles.dialogContainer}>
      <div
        onClick={(e) => {
          e.stopPropagation(); e.preventDefault();
        }}
        ref={ref}
        className={classNames(styles.container, contentContainerStyles)}
      >
        {children}
        <div
          className={styles.closeIconContainer}
          onClick={onClose}
        >
        </div>
      </div>
    </span>
  </Portal>;
};
export default React.memo(Modal);
