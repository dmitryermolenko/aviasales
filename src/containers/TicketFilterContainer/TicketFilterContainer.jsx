import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TicketFilter from '../../compontents/TicketFilter/TicketFilter';
import { setActiveFilter, filterTickets, setTicketsNumberToBeDisplayed } from '../../actions/actions';
import { TICKETS_NUMBER_TO_BE_DISPLAYED } from '../../utils/constants';

const TicketFilterContainer = ({ activeFilters, tickets, setFilter, filter, setTicketsNumber }) => {
  useEffect(() => {
    filter(activeFilters, tickets);
    setTicketsNumber(TICKETS_NUMBER_TO_BE_DISPLAYED);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters]);

  if (tickets.length) {
    return <TicketFilter setFilter={setFilter} activeFilters={activeFilters} />;
  }

  return null;
};

TicketFilterContainer.propTypes = {
  setFilter: PropTypes.func.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.func.isRequired,
  setTicketsNumber: PropTypes.func.isRequired,
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
  filter: filterTickets,
  setTicketsNumber: setTicketsNumberToBeDisplayed,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketFilterContainer);
