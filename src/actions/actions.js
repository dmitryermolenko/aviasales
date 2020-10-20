export const SET_ACTIVE_SORTING_TAB = 'SET_ACTIVE_SORTING_TAB';
export const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_TICKETS_FAILLURE = 'FETCH_TICKETS_FAILLURE';
export const SET_TICKETS_NUMBER_TO_BE_DISPLAYED = 'SET_TICKETS_NUMBER_TO_BE_DISPLAYED';

export const loadTickets = (payload) => {
  return {
    type: FETCH_TICKETS_SUCCESS,
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: FETCH_TICKETS_FAILLURE,
    payload,
  };
};

export const setActiveSortingTab = (payload) => {
  return {
    type: SET_ACTIVE_SORTING_TAB,
    payload,
  };
};

export const setActiveFilter = (payload) => {
  return {
    type: SET_ACTIVE_FILTER,
    payload,
  };
};

export const setDisplayedTicketsNumber = (payload) => {
  return {
    type: SET_TICKETS_NUMBER_TO_BE_DISPLAYED,
    payload,
  };
};

export const loadTicketsThunk = (service) => (dispatch) => {
  service
    .getTickets()
    .then(({ tickets, stop }) => {
      dispatch(loadTickets({ tickets, stop }));
    })
    .catch(() => {
      dispatch(setError({ tickets: [], stop: false, error: true }));
    });
};
