export const ORGANIZATION = {
  shortname: {
    type: 'text',
    default: '',
  },
  longname: {
    type: 'text',
    default: '',
  },
  ownership: {
    type: 'enum',
    default: 1,
    values: [1, 2],
  },
  inn: {
    type: 'number',
    default: '',
  },
  ogrn: {
    type: 'number',
    default: '',
  },
  active: {
    type: 'boolean',
    default: true,
  },
};
