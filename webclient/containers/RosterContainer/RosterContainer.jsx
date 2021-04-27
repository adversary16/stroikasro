import React from 'react';
import {Roster} from '../../components/Roster';
import styles from './RosterContainer.module.scss';
const RosterContainer = (props) => {
  const {members, t} = props;
  return <>
    <Roster {...{members, t}}/>
  </>;
};
export default RosterContainer;
