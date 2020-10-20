import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import classes from './ShowmoreButtonContainer.module.scss';
import { setDisplayedTicketsNumber } from '../../actions/actions';
import { DISPLAYED_TICKETS_DEFAULT_NUMBER } from '../../utils/constants';

const ShowmoreButtonContainer = ({ displayedTicketsNumber, setTicketsNumber, tickets, activeFilters }) => {
  const displayedTicketsTotal = displayedTicketsNumber + DISPLAYED_TICKETS_DEFAULT_NUMBER;
  if (tickets.length && activeFilters.length) {
    return (
      <Button
        className={classes['show-more']}
        type="primary"
        block
        onClick={() => setTicketsNumber({ ticketsNumber: displayedTicketsTotal })}
      >
        Показать еще 5 билетов
      </Button>
    );
  }

  return null;
};

ShowmoreButtonContainer.propTypes = {
  displayedTicketsNumber: PropTypes.number.isRequired,
  setTicketsNumber: PropTypes.func.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

const mapStateToProps = ({ displayedTicketsNumber, ticketList: { tickets }, activeFilters }) => ({
  displayedTicketsNumber,
  tickets,
  activeFilters,
});
const mapDispatchToProps = {
  setTicketsNumber: setDisplayedTicketsNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowmoreButtonContainer);
