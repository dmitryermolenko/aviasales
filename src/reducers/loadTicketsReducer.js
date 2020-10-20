import { FETCH_TICKETS_SUCCESS, FETCH_TICKETS_REQUEST, FETCH_TICKETS_FAILLURE } from '../actions/actions';

const initialState = {
  tickets: [],
  stop: true,
  error: false,
};

const loadTicketsReducer = (state = initialState, { type, payload = {} }) => {
  const { tickets, stop, error } = payload;
  switch (type) {
    case FETCH_TICKETS_SUCCESS:
      return {
        tickets: [...state.tickets, ...tickets],
        stop,
      };
    case FETCH_TICKETS_REQUEST:
      return initialState;
    case FETCH_TICKETS_FAILLURE:
      return {
        tickets: [...state.tickets, ...tickets, error],
        stop,
        error,
      };

    default:
      return state;
  }
};

export default loadTicketsReducer;
