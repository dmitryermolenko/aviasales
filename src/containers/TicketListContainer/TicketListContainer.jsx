import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withTicketsService from '../../compontents/withTicketsService/withTicketsService';
import TicketList from '../../compontents/TicketList/TicketList';

import { loadTicketsThunk } from '../../actions/actions';

class TicketListContainer extends Component {
  componentDidMount() {
    const { ticketsService, loadTickets } = this.props;

    loadTickets(ticketsService);
  }

  render() {
    const { tickets } = this.props;
    return <TicketList tickets={tickets} />;
  }
}

TicketListContainer.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadTickets: PropTypes.func.isRequired,
  ticketsService: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

const mapStateToProps = ({ ticketList: { tickets } }) => ({ tickets });
const mapDispatchToProps = {
  loadTickets: loadTicketsThunk,
};

export default withTicketsService()(connect(mapStateToProps, mapDispatchToProps)(TicketListContainer));
