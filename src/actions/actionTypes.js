export const SET_ACTIVE_SORTING_TAB = 'SET_ACTIVE_SORTING_TAB';
export const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER';

export const setActiveSortingTab = (tabId) => {
  return {
    type: SET_ACTIVE_SORTING_TAB,
    tabId,
  };
};

export const setActiveFilter = (filterId) => {
  return {
    type: SET_ACTIVE_FILTER,
    filterId,
  };
};
