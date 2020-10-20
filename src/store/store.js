import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers/reducer';

const configureStore = (initialState) => {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(ReduxThunk)));
};

const store = configureStore();

export default store;
