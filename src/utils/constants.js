export const Filter = {
  ALL: 'all',
  NO_TRANSFER: 0,
  ONE_TRANSFER: 1,
  TWO_TRANSFERS: 2,
  THREE_TRANSFERS: 3,
};

export const Sorting = {
  CHEEP: 'cheep',
  FAST: 'fast',
};

export const FILTERS = [
  Filter.ALL,
  Filter.NO_TRANSFER,
  Filter.ONE_TRANSFER,
  Filter.TWO_TRANSFERS,
  Filter.THREE_TRANSFERS,
];

export const FILTERS_LENGTH = Object.keys(Filter).length;
export const DISPLAYED_TICKETS_DEFAULT_NUMBER = 5;
