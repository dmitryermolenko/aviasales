import React from 'react';
import ReactDOM from 'react-dom';
/* import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; */
import './index.scss';
/* import reducer from './reducer'; */
import App from './compontents/App/App';

/* const store = createStore(reducer); */

ReactDOM.render(
  /* <Provider store={store} >
    <App />
  </Provider> */
  <App />,
  document.getElementById('root')
);
