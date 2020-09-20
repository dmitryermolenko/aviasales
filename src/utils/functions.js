export const formatStopsCountLabel = (stopsCount) => {
  let label = 'ПЕРЕСАДКИ';
  if (stopsCount === 1) {
    label = 'ПЕРЕСАДКА';
  }
  if (!stopsCount || stopsCount > 4) {
    label = 'ПЕРЕСАДОК';
  }
  return label;
};

export const sortTickets = (tickets, activeSortingTab) => {
  let sortedTickets;
  if (activeSortingTab === 'cheep') {
    sortedTickets = tickets.sort((ticket1, ticket2) => ticket1.price - ticket2.price);
  } else {
    sortedTickets = tickets.sort(
      (ticket1, ticket2) =>
        ticket1.to.toDuration + ticket1.from.fromDuration - (ticket2.to.toDuration + ticket2.from.fromDuration)
    );
  }

  return sortedTickets;
};

export const filterTickets = (activeFilters, originalTickets) => {
  let filteredTickets = activeFilters.map((filter) => {
    return originalTickets.filter(
      ({ to: { toStopsCount }, from: { fromStopsCount } }) => toStopsCount === filter || fromStopsCount === filter
    );
  });

  filteredTickets = filteredTickets
    .flat()
    .sort((ticket1, ticket2) => ticket1.id - ticket2.id)
    .filter((item, idx, arr) => {
      if (idx === arr.length - 1) {
        return item;
      }
      return item.id !== arr[idx + 1].id;
    });

  return filteredTickets;
};
