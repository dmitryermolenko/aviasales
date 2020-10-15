import React from 'react';
import PropTypes from 'prop-types';
import formatTime from './helpers';
import classes from './Ticket.module.scss';

const Ticket = ({ ticket: { price, carrier, to, from } }) => {
  const {
    toOrigin,
    toDestination,
    toDepartureTime,
    toArrivalTime,
    toDuration,
    toStops,
    toStopsCount,
    toStopsCountLabel,
  } = to;
  const {
    fromOrigin,
    fromDestination,
    fromDepartureTime,
    fromArrivalTime,
    fromDuration,
    fromStops,
    fromStopsCount,
    fromStopsCountLabel,
  } = from;

  return (
    <article className={classes.ticket}>
      <header className={classes.ticket__header}>
        <p className={classes.ticket__price}>{price.toLocaleString('ru')} P</p>
        <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="" width="" />
      </header>
      <section className={classes.ticket__way}>
        <div className={classes.ticket_section}>
          <h3 className={classes.ticket__subtitle}>
            {toOrigin} - {toDestination}
          </h3>
          <p className={classes.ticket__info}>
            {toDepartureTime} - {toArrivalTime}
          </p>
        </div>
        <div className={classes.ticket_section}>
          <h3 className={classes.ticket__subtitle}>В ПУТИ </h3>
          <p className={classes.ticket__info}>{formatTime(toDuration)}</p>
        </div>
        <div className={classes.ticket_section}>
          <h3 className={classes.ticket__subtitle}>
            {toStopsCount} {toStopsCountLabel}
          </h3>
          <p className={classes.ticket__info}>{toStops}</p>
        </div>
      </section>
      <section className={classes.ticket__way}>
        <div className={classes.ticket_section}>
          <h3 className={classes.ticket__subtitle}>
            {fromOrigin} - {fromDestination}
          </h3>
          <p className={classes.ticket__info}>
            {fromDepartureTime} - {fromArrivalTime}
          </p>
        </div>
        <div className={classes.ticket_section}>
          <h3 className={classes.ticket__subtitle}>В ПУТИ </h3>
          <p className={classes.ticket__info}>{formatTime(fromDuration)}</p>
        </div>
        <div className={classes.ticket_section}>
          <h3 className={classes.ticket__subtitle}>
            {fromStopsCount} {fromStopsCountLabel}
          </h3>
          <p className={classes.ticket__info}>{fromStops}</p>
        </div>
      </section>
    </article>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    to: PropTypes.shape({
      toOrigin: PropTypes.string,
      toDestination: PropTypes.string,
      toDepartureTime: PropTypes.string,
      toArrivalTime: PropTypes.string,
      toDuration: PropTypes.number,
      toStops: PropTypes.string,
      toStopsCount: PropTypes.number,
      toStopsCountLabel: PropTypes.string,
    }),
    from: PropTypes.shape({
      fromOrigin: PropTypes.string,
      fromDestination: PropTypes.string,
      fromDepartureTime: PropTypes.string,
      fromArrivalTime: PropTypes.string,
      fromDuration: PropTypes.number,
      fromStops: PropTypes.string,
      fromStopsCount: PropTypes.number,
      fromStopsCountLabel: PropTypes.string,
    }),
  }).isRequired,
};

export default Ticket;
