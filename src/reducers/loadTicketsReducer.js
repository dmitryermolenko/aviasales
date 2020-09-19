import { FETCH_TICKETS_SUCCESS, FETCH_TICKETS_REQUEST } from '../actions/actions';

const initialState = {
  tickets: [],
  isLoading: true,
  stop: true,
};

const loadTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_SUCCESS:
      return {
        tickets: [...state.tickets, ...action.tickets],
        isLoading: false,
        stop: action.stop,
      };
    case FETCH_TICKETS_REQUEST:
      return initialState;

    default:
      return state;
  }
};

export default loadTicketsReducer;
