import { FILTER_TICKETS } from '../actions/actions';
import { filterTickets } from '../utils/functions';

const initialState = [];

const filterTicketsReducer = (state = initialState, { type, activeFilters, originalTickets, activeSortingTab }) => {
  switch (type) {
    case FILTER_TICKETS:
      return filterTickets(activeFilters, originalTickets, activeSortingTab);

    default:
      return state;
  }
};

export default filterTicketsReducer;
