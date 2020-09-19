import { FILTER_TICKETS } from '../actions/actions';
import { filterTickets, sortTickets } from '../utils/functions';
import { FILTERS_LENGTH } from '../utils/constants';

const initialState = [];

const filterTicketsReducer = (state = initialState, { type, activeFilters, originalTickets, activeSortingTab }) => {
  switch (type) {
    case FILTER_TICKETS:
      if (activeFilters.length === FILTERS_LENGTH) {
        return sortTickets(originalTickets, activeSortingTab);
      }
      return filterTickets(activeFilters, originalTickets, activeSortingTab);

    default:
      return state;
  }
};

export default filterTicketsReducer;
