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

export const FILTER_BUTTONS = [
  { text: 'Все', id: 'all' },
  { text: 'Без пересадок', id: 0 },
  { text: '1 пересадка', id: 1 },
  { text: '2 пересадки', id: 2 },
  { text: '3 пересадки', id: 3 },
];

export const SORT_BUTTONS = [
  { text: 'Самый дешевый', id: 'cheep' },
  { text: 'Самый быстрый', id: 'fast' },
];

export const FILTERS = [
  Filter.ALL,
  Filter.NO_TRANSFER,
  Filter.ONE_TRANSFER,
  Filter.TWO_TRANSFERS,
  Filter.THREE_TRANSFERS,
];

export const FILTERS_LENGTH = 5;
export const TICKETS_NUMBER_TO_BE_DISPLAYED = 5;
