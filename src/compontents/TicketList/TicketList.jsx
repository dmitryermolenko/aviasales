import React from 'react';
import Ticket from '../Ticket/Ticket';
import classes from './TicketList.module.scss';

const TicketList = () => {
  /* const { ticketList } = props;
  const tickets = ticketList.map(ticket => {
    return (
      <li>
       <article>
         <header>
           <p>13 400 P</p>
           <img src="" alt=""/>
         </header>
       </article>
      </li>
      
    )
  }) */

  return (
    <ul className={classes['ticket-list']}>
      <li className={classes['ticket-list__item']}>
        <Ticket />
      </li>
      <li className={classes['ticket-list__item']}>
        <Ticket />
      </li>
      <li className={classes['ticket-list__item']}>
        <Ticket />
      </li>
      <li className={classes['ticket-list__item']}>
        <Ticket />
      </li>
      <li className={classes['ticket-list__item']}>
        <Ticket />
      </li>
    </ul>
  );
};

export default TicketList;
