import React from 'react';
import PropTypes from 'prop-types';
import FILTER_BUTTONS from './helpers';
import classes from './TicketFilter.module.scss';

const TicketFilter = ({ activeFilters, setFilter }) => {
  return (
    <fieldset className={classes.filter}>
      <h2 className={classes.filter__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <ul className={classes['filter-list']}>
        {FILTER_BUTTONS.map(({ text, id }) => (
          <li key={id} className={classes['filter-list__item']}>
            <input
              id={id}
              className={classes.filter__checkbox}
              value={id}
              type="checkbox"
              checked={activeFilters.some((el) => el === id)}
              onChange={() => setFilter(id)}
            />
            <label className={classes.filter__label} htmlFor={id}>
              {text}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

TicketFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

export default TicketFilter;
