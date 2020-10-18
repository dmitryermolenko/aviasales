import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TicketFilter from '../../compontents/TicketFilter/TicketFilter';
import { setActiveFilter } from '../../actions/actions';

const TicketFilterContainer = ({ activeFilters, tickets, setFilter }) => {
  if (tickets.length) {
    return <TicketFilter setFilter={setFilter} activeFilters={activeFilters} />;
  }

  return null;
};

TicketFilterContainer.propTypes = {
  setFilter: PropTypes.func.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeFilters: state.activeFilters,
    activeSortingTab: state.activeSortingTab,
    tickets: state.ticketList.tickets,
  };
};

const mapDispatchToProps = {
  setFilter: setActiveFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketFilterContainer);
