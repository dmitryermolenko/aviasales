export const TICKETS_NUMBER_PER_PERCENT = 100;

export const sortTickets = (tickets, activeSortingTab) => {
  let sortedTickets;
  if (activeSortingTab === 'cheep') {
    sortedTickets = tickets.sort((ticket1, ticket2) => ticket1.price - ticket2.price);
  } else {
    sortedTickets = tickets.sort(
      (ticket1, ticket2) =>
        ticket1.segments[0].duration +
        ticket1.segments[1].duration -
        (ticket2.segments[0].duration + ticket2.segments[1].duration)
    );
  }

  return sortedTickets;
};

export const filterTickets = (activeFilters, originalTickets) => {
  if (!originalTickets.length) {
    return [];
  }

  let filteredTickets = activeFilters.map((filter) => {
    return originalTickets.filter(
      ({ segments }) => segments[0].stops.length === filter || segments[1].stops.length === filter
    );
  });

  filteredTickets = Array.from(new Set(filteredTickets.flat().map(JSON.stringify))).map(JSON.parse);

  return filteredTickets;
};
