export const FILTER_BUTTONS = [
  { text: 'Все', id: 'all' },
  { text: 'Без пересадок', id: 0 },
  { text: '1 пересадка', id: 1 },
  { text: '2 пересадки', id: 2 },
  { text: '3 пересадки', id: 3 },
];

export const checkActiveFilter = (filters, currentFilterId) => {
  return filters.some((el) => el === currentFilterId);
};
