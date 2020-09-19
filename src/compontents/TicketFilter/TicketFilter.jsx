import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveFilter, filterTickets } from '../../actions/actions';
import { FILTER_BUTTONS } from '../../utils/constants';
import classes from './TicketFilter.module.scss';

const TicketFilter = ({ activeFilters, tickets, activeSortingTab, setFilter, filter }) => {
  useEffect(() => {
    filter(activeFilters, tickets, activeSortingTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters, activeSortingTab]);

  return (
    <fieldset className={classes.filter}>
      <legend className={classes.filter__title}>TRANSFER NUMBER</legend>
      <ul className={classes['filter-list']}>
        {FILTER_BUTTONS.map(({ text, id }) => (
          <li key={id} className={classes['filter-list__item']}>
            <input
              id={id}
              className={classes.filter__checkbox}
              value={id}
              type="checkbox"
              checked={activeFilters.some((el) => el === id)}
              onChange={() => setFilter(id, tickets)}
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
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeSortingTab: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeFilters: state.activeFilters,
    activeSortingTab: state.activeSortingTab,
    tickets: state.ticketList.tickets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (id) => dispatch(setActiveFilter(id)),
    filter: (filters, tickets, sortingTab) => dispatch(filterTickets(filters, tickets, sortingTab)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketFilter);
