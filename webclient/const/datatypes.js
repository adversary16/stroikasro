export const ORGANIZATION = {
  shortname: {
    type: 'text',
    default: '',
  },
  longname: {
    type: 'text',
    default: '',
  },
  type: {
    type: 'enum',
    default: 1,
    values: [1, 2],
  },
  ownership: {
    type: 'enum',
    default: 1,
    values: [1, 2],
  },
  inn: {
    type: 'text',
    default: '',
  },
  ogrn: {
    type: 'text',
    default: '',
  },
  active: {
    type: 'bool',
    default: true,
  },
};
