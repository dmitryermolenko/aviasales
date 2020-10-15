export const TICKETS_NUMBER_PER_PERCENT = 100;

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
