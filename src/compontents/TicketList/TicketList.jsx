import React from 'react';
import PropTypes from 'prop-types';

import Ticket from '../Ticket/Ticket';

import classes from './TicketList.module.scss';

const TicketList = ({ tickets }) => {
  return (
    <ul className={classes['ticket-list']}>
      {tickets.map((ticket) => (
        <li key={ticket.id} className={classes['ticket-list__item']}>
          <Ticket ticket={ticket} />
        </li>
      ))}
    </ul>
  );
};

TicketList.defaultProps = {
  tickets: [],
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
};

export default TicketList;
