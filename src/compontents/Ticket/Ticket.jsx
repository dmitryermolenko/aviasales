import React from 'react';
import classes from './Ticket.module.scss';

const Ticket = () => {
  return (
    <article className={classes.ticket}>
      <header className={classes.ticket__header}>
        <p className={classes.ticket__price}>13 400 P</p>
        <img src="http://pics.avs.io/99/36/MH.png" alt="" width="" />
      </header>
      <section className={classes.ticket__way}>
        <div>
          <h3 className={classes.ticket__subtitle}>MOW - HKT</h3>
          <p className={classes.ticket__info}>10:45-08:00</p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>В ПУТИ </h3>
          <p className={classes.ticket__info}>21ч 15м </p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>2 ПЕРЕСАДКИ</h3>
          <p className={classes.ticket__info}>HKG,JNB</p>
        </div>
      </section>
      <section className={classes.ticket__way}>
        <div>
          <h3 className={classes.ticket__subtitle}>MOW - HKT</h3>
          <p className={classes.ticket__info}>10:45-08:00</p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>В ПУТИ </h3>
          <p className={classes.ticket__info}>21ч 15м </p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>2 ПЕРЕСАДКИ</h3>
          <p className={classes.ticket__info}>HKG,JNB</p>
        </div>
      </section>
    </article>
  );
};

export default Ticket;
