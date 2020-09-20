import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import classes from './ShowmoreButtonContainer.module.scss';
import { setTicketsNumberToBeDisplayed } from '../../actions/actions';
import { TICKETS_NUMBER_TO_BE_DISPLAYED } from '../../utils/constants';

const ShowmoreButtonContainer = ({ ticketsNumberToBeDisplayed, setTicketsNumber }) => {
  return (
    <Button
      className={classes['show-more']}
      type="primary"
      block
      onClick={() => setTicketsNumber(ticketsNumberToBeDisplayed + TICKETS_NUMBER_TO_BE_DISPLAYED)}
    >
      Показать еще 5 билетов
    </Button>
  );
};

ShowmoreButtonContainer.propTypes = {
  ticketsNumberToBeDisplayed: PropTypes.number.isRequired,
  setTicketsNumber: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ticketsNumberToBeDisplayed }) => ({ ticketsNumberToBeDisplayed });
const mapDispatchToProps = {
  setTicketsNumber: setTicketsNumberToBeDisplayed,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowmoreButtonContainer);
