import React from 'react';
import { connect } from 'react-redux';
import TicketFilterContainer from '../../containers/TicketFilterContainer/TicketFilterContainer';
import TicketListContainer from '../../containers/TicketListContainer/TicketListContainer';
import TicketSorting from '../TicketSorting/TicketSorting';
import ShowmoreButtonContainer from '../../containers/ShowmoreButtonContainer/ShowmoreButtonContainer';
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
          <TicketFilterContainer />
        </section>
        <section className={classes.tickets}>
          <TicketSorting />
          <TicketListContainer />
          <ShowmoreButtonContainer />
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = ({ ticketList: { tickets } }) => ({ tickets });
export default withTicketsService()(connect(mapStateToProps)(App));
