import { FILTER_TICKETS } from '../actions/actions';
import { filterTickets } from '../utils/functions';
import { FILTERS_LENGTH } from '../utils/constants';

const initialState = [];

const filterTicketsReducer = (state = initialState, { type, activeFilters, originalTickets }) => {
  switch (type) {
    case FILTER_TICKETS:
      if (activeFilters.length === FILTERS_LENGTH) {
        return originalTickets;
      }
      return filterTickets(activeFilters, originalTickets);

    default:
      return state;
  }
};

export default filterTicketsReducer;
