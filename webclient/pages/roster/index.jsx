import useTranslation from 'next-translate/useTranslation';
import {default as members} from '../../const/ooo.json';
import {RosterContainer} from '../../containers/RosterContainer';

function Roster(props) {
  const {t} = useTranslation('common');
  return <RosterContainer { ...{...props, t}}/>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      members,
    },
  };
}

export default Roster;
