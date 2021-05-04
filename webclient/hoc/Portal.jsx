import {createPortal} from 'react-dom';

function Portal({
  children,
  parent,
}) {
  const el = document.getElementById('__portal');
  return createPortal(children, el);
}

export default Portal;
