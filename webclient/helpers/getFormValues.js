export const getFormValues = ({ref, names}) => {
  if (!ref.current) return {};
  const {elements} = ref.current;
  const processed = names.reduce((acc, name) => {
    const entry = typeof name !== 'object' ?
    {[name]: elements[name].value} :
    {[Object.values(name)[0]]: elements[Object.keys(name)[0]].value};
    console.log(entry);
    return {...acc, ...entry};
  }, {});
  return processed;
};
