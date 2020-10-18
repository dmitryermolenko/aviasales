import { combineReducers } from 'redux';
import loadTicketsReducer from './loadTicketsReducer';
import setActiveFiltersReducer from './setActiveFiltersReducer';
import setActiveSortingTabReducer from './setActiveSortingTabReducer';
import setDisplayedTicketsNumberReducer from './setDisplayedTicketsNumberReducer';

const rootReducer = combineReducers({
  ticketList: loadTicketsReducer,
  activeFilters: setActiveFiltersReducer,
  activeSortingTab: setActiveSortingTabReducer,
  displayedTicketsNumber: setDisplayedTicketsNumberReducer,
});

export default rootReducer;
