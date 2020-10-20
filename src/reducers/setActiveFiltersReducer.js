import { SET_ACTIVE_FILTER } from '../actions/actions';
import * as constants from '../utils/constants';

const { ALL } = constants.Filter;
const { FILTERS_LENGTH, FILTERS } = constants;
const initialState = FILTERS;

const filterTicketsReducer = (state = initialState, { type, payload = {} }) => {
  const { filterId } = payload;
  switch (type) {
    case SET_ACTIVE_FILTER:
      // Если при включенной галочке "Все"
      // снимается любая другая галочка - галочка "Все" тоже снимается

      if (state.length === FILTERS_LENGTH && filterId !== ALL) {
        return state.filter((el) => el !== ALL && el !== filterId);
      }

      // Если включается галочка "Все" -
      // проставляются галочки всем остальным фильтрам

      // Если снимается галочка "Все" - снимаются все остальные фильтры

      if (filterId === ALL) {
        if (state.some((el) => el === ALL)) {
          return [];
        }

        return initialState;
      }

      // Если проставить каждую галочку по пересадкам -
      // галочка "Все" автоматически включится

      if (filterId !== ALL && state.length === FILTERS_LENGTH - 2) {
        if (state.some((el) => el === filterId)) {
          return state.filter((el) => el !== filterId);
        }

        return [...state, filterId, ALL];
      }

      // Базовое проставление / снятие галочек

      if (filterId !== ALL) {
        if (state.some((el) => el === filterId)) {
          return state.filter((el) => el !== filterId);
        }

        return [...state, filterId];
      }

      break;

    default:
      return state;
  }
  return null;
};

export default filterTicketsReducer;
