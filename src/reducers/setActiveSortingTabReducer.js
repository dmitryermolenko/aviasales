import { SET_ACTIVE_SORTING_TAB } from '../actions/actions';
import * as constants from '../utils/constants';

const { CHEEP } = constants.Sorting;
const initialState = CHEEP;

const setActiveSortingTabReducer = (state = initialState, { type, tabId }) => {
  switch (type) {
    case SET_ACTIVE_SORTING_TAB:
      return tabId;

    default:
      return state;
  }
};

export default setActiveSortingTabReducer;
