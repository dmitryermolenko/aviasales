import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveFilter } from '../../actions/actionTypes';
import { FILTER_BUTTONS } from '../../utils/constants';
import classes from './TicketFilter.module.scss';

const TicketFilter = ({ filters, setFilter }) => {
  return (
    <fieldset className={classes.filter}>
      <legend className={classes.filter__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      <ul className={classes['filter-list']}>
        {FILTER_BUTTONS.map(({ text, id }) => (
          <li key={id} className={classes['filter-list__item']}>
            <input
              id={id}
              className={classes.filter__checkbox}
              value={id}
              type="checkbox"
              checked={filters.some((el) => el === id)}
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
  filters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};

TicketFilter.defaultProps = {
  filters: [],
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (id) => dispatch(setActiveFilter(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketFilter);
