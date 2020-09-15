import { combineReducers } from 'redux';
import loadTicketsReducer from './loadTicketsReducer';
import setActiveFiltersReducer from './setActiveFiltersReducer';
import setActiveSortingTabReducer from './setActiveSortingTabReducer';
import filterTicketsReducer from './filterTicketsReducer';

const rootReducer = combineReducers({
  ticketList: loadTicketsReducer,
  activeFilters: setActiveFiltersReducer,
  activeSortingTab: setActiveSortingTabReducer,
  filteredTicketList: filterTicketsReducer,
});

export default rootReducer;
