import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import App from './compontents/App/App';
import TicketsService from './services/TicketsService';
import { TicketsServiceProvider } from './compontents/TicketsServiceContext/TicketsServiceContext';

import store from './store';

const ticketsService = new TicketsService();

ReactDOM.render(
  <Provider store={store}>
    <TicketsServiceProvider value={ticketsService}>
      <App />
    </TicketsServiceProvider>
  </Provider>,
  document.getElementById('root')
);
