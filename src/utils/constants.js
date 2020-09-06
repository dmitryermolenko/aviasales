export const Filter = {
  ALL: 'all',
  NO_TRANSFER: 'no-transfer',
  ONE_TRANSFER: 'one',
  TWO_TRANSFERS: 'two',
  THREE_TRANSFERS: 'three',
};

export const Sorting = {
  CHEEP: 'cheep',
  FAST: 'fast',
};

export const FILTER_BUTTONS = [
  { text: 'Все', id: 'all' },
  { text: 'Без пересадок', id: 'no-transfer' },
  { text: '1 пересадка', id: 'one' },
  { text: '2 пересадки', id: 'two' },
  { text: '3 пересадки', id: 'three' },
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
