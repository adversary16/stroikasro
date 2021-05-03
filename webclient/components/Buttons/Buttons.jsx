import classNames from 'classnames';
import React from 'react';
import styles from './Buttons.module.scss';

const AddButton = ({onClick = ()=>{}, className}) => {
  return <div
    className={classNames(styles.button, styles.plusButton, className)}
    onClick={onClick}
  />;
};

const SearchButton = ({onClick = ()=>{}, className}) => {
  return <div
    className={classNames(styles.button, styles.searchButton, className)}
    onClick={onClick}
  />;
};

const FilterButton = ({onClick = ()=>{}, className}) => {
  return <div
    className={classNames(styles.button, styles.filterButton, className)}
    onClick={onClick}
  />;
};

const EditButton = ({onClick = ()=>{}, className}) => {
  return <div
    className={classNames(styles.button, styles.editButton, className)}
    onClick={onClick}
  />;
};

const DeleteButton = ({onClick = ()=>{}, className}) => {
  return <div
    className={classNames(styles.button, styles.deleteButton, className)}
    onClick={onClick}
  />;
};


export {
  AddButton,
  SearchButton,
  FilterButton,
  EditButton,
  DeleteButton,
};
