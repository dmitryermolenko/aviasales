export const SET_ACTIVE_SORTING_TAB = 'SET_ACTIVE_SORTING_TAB';
export const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_TICKETS_FAILLURE = 'FETCH_TICKETS_FAILLURE';
export const SET_TICKETS_NUMBER_TO_BE_DISPLAYED = 'SET_TICKETS_NUMBER_TO_BE_DISPLAYED';

export const loadTickets = (newTickets, stop) => {
  return {
    type: FETCH_TICKETS_SUCCESS,
    tickets: newTickets,
    stop,
  };
};

export const setError = (tickets, stop, error) => {
  return {
    type: FETCH_TICKETS_FAILLURE,
    tickets,
    stop,
    error,
  };
};

export const setActiveSortingTab = (tabId) => {
  return {
    type: SET_ACTIVE_SORTING_TAB,
    tabId,
  };
};

export const setActiveFilter = (filterId) => {
  return {
    type: SET_ACTIVE_FILTER,
    filterId,
  };
};

export const setDisplayedTicketsNumber = (ticketsNumber) => {
  return {
    type: SET_TICKETS_NUMBER_TO_BE_DISPLAYED,
    ticketsNumber,
  };
};

export const loadTicketsThunk = (service) => (dispatch) => {
  service
    .getTickets()
    .then(({ tickets, stop }) => {
      dispatch(loadTickets(tickets, stop));
    })
    .catch(() => {
      dispatch(setError([], false, true));
    });
};
