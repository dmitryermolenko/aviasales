import { SET_TICKETS_NUMBER_TO_BE_DISPLAYED } from '../actions/actions';

const initialState = 5;

const setTicketsNumberToBeDisplayedReducer = (state = initialState, { type, ticketsNumber }) => {
  switch (type) {
    case SET_TICKETS_NUMBER_TO_BE_DISPLAYED:
      return ticketsNumber;

    default:
      return state;
  }
};

export default setTicketsNumberToBeDisplayedReducer;
