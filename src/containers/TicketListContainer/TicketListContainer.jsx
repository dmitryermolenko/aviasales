import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withTicketsService from '../../compontents/withTicketsService/withTicketsService';
import TicketList from '../../compontents/TicketList/TicketList';

import { filterTickets, loadTicketsThunk } from '../../actions/actions';

const TicketListContainer = (props) => {
  const {
    ticketsService,
    loadTickets,
    stop,
    tickets,
    activeSortingTab,
    activeFilters,
    filteredTicketList,
    filter,
  } = props;

  useEffect(() => {
    loadTickets(ticketsService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filter(activeFilters, tickets, activeSortingTab);
    if (!stop) {
      loadTickets(ticketsService);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickets]);

  const displayedTickets = filteredTicketList.slice(0, 5);

  return <TicketList tickets={displayedTickets} />;
};

TicketListContainer.propTypes = {
  filteredTicketList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadTickets: PropTypes.func.isRequired,
  ticketsService: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]))
    .isRequired,
  stop: PropTypes.bool.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeSortingTab: PropTypes.string.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  filter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ticketList: { tickets, stop }, filteredTicketList, activeSortingTab, activeFilters }) => ({
  tickets,
  stop,
  filteredTicketList,
  activeSortingTab,
  activeFilters,
});
const mapDispatchToProps = {
  loadTickets: loadTicketsThunk,
  filter: filterTickets,
};

export default withTicketsService()(connect(mapStateToProps, mapDispatchToProps)(TicketListContainer));
