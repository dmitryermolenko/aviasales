import { FETCH_TICKETS_SUCCESS, FETCH_TICKETS_REQUEST } from '../actions/actions';

const initialState = {
  tickets: [],
  isLoading: true,
};

const loadTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_SUCCESS:
      return {
        tickets: action.tickets,
        isLoading: false,
      };
    case FETCH_TICKETS_REQUEST:
      return initialState;

    default:
      return state;
  }
};

export default loadTicketsReducer;
