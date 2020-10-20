import React from 'react';
import PropTypes from 'prop-types';

import Ticket from '../Ticket/Ticket';
import { formatData } from './helpers';

import classes from './TicketList.module.scss';

const TicketList = ({ tickets }) => {
  const formattedData = tickets.map(formatData);
  const ticketList = formattedData.map((ticket) => (
    <li key={ticket.id} className={classes['ticket-list__item']}>
      <Ticket ticket={ticket} />
    </li>
  ));

  return <ul className={classes['ticket-list']}>{ticketList}</ul>;
};

TicketList.defaultProps = {
  tickets: [],
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
};

export default TicketList;
