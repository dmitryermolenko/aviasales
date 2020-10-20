import { FETCH_TICKETS_SUCCESS, FETCH_TICKETS_REQUEST, FETCH_TICKETS_FAILLURE } from '../actions/actions';

const initialState = {
  tickets: [],
  stop: true,
  error: false,
};

const loadTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_SUCCESS:
      return {
        tickets: [...state.tickets, ...action.tickets],
        stop: action.stop,
      };
    case FETCH_TICKETS_REQUEST:
      return initialState;
    case FETCH_TICKETS_FAILLURE:
      return {
        tickets: [...state.tickets, ...action.tickets],
        stop: action.stop,
        error: action.error,
      };

    default:
      return state;
  }
};

export default loadTicketsReducer;
