import React, { useEffect, useState, useMemo } from 'react';
import { Progress, Alert } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortTickets, filterTickets, TICKETS_NUMBER_PER_PERCENT } from './helpers';

import withTicketsService from '../../compontents/withTicketsService/withTicketsService';
import TicketList from '../../compontents/TicketList/TicketList';

import { loadTicketsThunk } from '../../actions/actions';

const TicketListContainer = (props) => {
  const [isLoadingFinished, setLodingStatus] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const { ticketsService, loadTickets, stop, tickets, activeSortingTab, activeFilters, displayedTicketsNumber } = props;

  useEffect(() => {
    loadTickets(ticketsService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoadingPercent(tickets.length / TICKETS_NUMBER_PER_PERCENT);
    if (!stop) {
      loadTickets(ticketsService);
    }

    if (stop && tickets.length) {
      setLodingStatus(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickets]);

  const filteredTickets = useMemo(() => {
    return filterTickets(activeFilters, tickets);
  }, [tickets, activeFilters]);

  const sortedTickets = useMemo(() => {
    return sortTickets(filteredTickets, activeSortingTab);
  }, [filteredTickets, activeSortingTab]);

  // данные загружаются и ни один из фильтров не выбран
  if (!isLoadingFinished && !activeFilters.length) {
    return (
      <>
        <Progress percent={loadingPercent} showInfo={false} strokeColor={{ from: '#108ee9', to: '#87d068' }} />
        <Alert description="Рейсов, подходящих под заданные фильтры, не найдено" type="info" />
      </>
    );
  }

  // данные загружены и ни один из фильтров не выбран
  if (!activeFilters.length) {
    return <Alert description="Рейсов, подходящих под заданные фильтры, не найдено" type="info" />;
  }

  // данные загружены и все фильтры выбраны
  if (isLoadingFinished) {
    return <TicketList tickets={sortedTickets.slice(0, displayedTicketsNumber)} />;
  }

  if (!tickets.length) {
    return null;
  }

  // данные загружаются и все фильтры выбраны
  return (
    <>
      <Progress percent={loadingPercent} showInfo={false} strokeColor={{ from: '#108ee9', to: '#87d068' }} />
      <TicketList tickets={sortedTickets.slice(0, displayedTicketsNumber)} />
    </>
  );
};

TicketListContainer.propTypes = {
  loadTickets: PropTypes.func.isRequired,
  ticketsService: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]))
    .isRequired,
  stop: PropTypes.bool.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeSortingTab: PropTypes.string.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  displayedTicketsNumber: PropTypes.number.isRequired,
};

const mapStateToProps = ({
  ticketList: { tickets, stop },
  filteredTicketList,
  activeSortingTab,
  activeFilters,
  displayedTicketsNumber,
}) => ({
  tickets,
  stop,
  filteredTicketList,
  activeSortingTab,
  activeFilters,
  displayedTicketsNumber,
});
const mapDispatchToProps = {
  loadTickets: loadTicketsThunk,
};

export default withTicketsService()(connect(mapStateToProps, mapDispatchToProps)(TicketListContainer));
