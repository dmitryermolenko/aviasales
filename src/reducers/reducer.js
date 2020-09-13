import { combineReducers } from 'redux';
import loadTicketsReducer from './loadTicketsReducer';
import sortTicketsReducer from './sortTicketsReducer';
import filterTicketsReducer from './filterTicketsReducer';

const rootReducer = combineReducers({
  activeFilters: filterTicketsReducer,
  activeSortingTab: sortTicketsReducer,
  ticketList: loadTicketsReducer,
});

export default rootReducer;
