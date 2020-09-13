import React from 'react';
import TicketFilter from '../TicketFilter/TicketFilter';
import TicketListContainer from '../../containers/TicketListContainer/TicketListContainer';
import TicketSorting from '../TicketSorting/TicketSorting';
import classes from './App.module.scss';
import logo from '../../img/logo.svg';

import withTicketsService from '../withTicketsService/withTicketsService';

const App = () => {
  return (
    <div className={classes.app}>
      <header className={classes['app-header']}>
        <img className={classes.logo} src={logo} alt="Изображение самолета" />
      </header>
      <main className={classes['app-main']}>
        <section className={classes.filters}>
          <TicketFilter />
        </section>
        <section className={classes.tickets}>
          <TicketSorting />
          <TicketListContainer />
        </section>
      </main>
    </div>
  );
};

export default withTicketsService()(App);
