import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TICKETS_NUMBER_PER_PERCENT } from '../../utils/constants';

import withTicketsService from '../../compontents/withTicketsService/withTicketsService';
import TicketList from '../../compontents/TicketList/TicketList';

import { filterTickets, loadTicketsThunk } from '../../actions/actions';
import { sortTickets } from '../../utils/functions';

const TicketListContainer = (props) => {
  const [isLoadingFinished, setLodingStatus] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const {
    ticketsService,
    loadTickets,
    stop,
    tickets,
    activeSortingTab,
    activeFilters,
    filteredTicketList,
    filter,
    ticketsNumberToBeDisplayed,
  } = props;

  useEffect(() => {
    loadTickets(ticketsService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filter(activeFilters, tickets);
    setLoadingPercent(tickets.length / TICKETS_NUMBER_PER_PERCENT);
    if (!stop) {
      loadTickets(ticketsService);
    }

    if (stop && tickets.length) {
      setLodingStatus(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickets]);

  const displayedTickets = sortTickets(filteredTicketList, activeSortingTab).slice(0, ticketsNumberToBeDisplayed);

  if (isLoadingFinished) {
    return <TicketList tickets={displayedTickets} />;
  }

  return (
    <>
      <Progress percent={loadingPercent} showInfo={false} strokeColor={{ from: '#108ee9', to: '#87d068' }} />
      <TicketList tickets={displayedTickets} />
    </>
  );
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
  ticketsNumberToBeDisplayed: PropTypes.number.isRequired,
};

const mapStateToProps = ({
  ticketList: { tickets, stop },
  filteredTicketList,
  activeSortingTab,
  activeFilters,
  ticketsNumberToBeDisplayed,
}) => ({
  tickets,
  stop,
  filteredTicketList,
  activeSortingTab,
  activeFilters,
  ticketsNumberToBeDisplayed,
});
const mapDispatchToProps = {
  loadTickets: loadTicketsThunk,
  filter: filterTickets,
};

export default withTicketsService()(connect(mapStateToProps, mapDispatchToProps)(TicketListContainer));
