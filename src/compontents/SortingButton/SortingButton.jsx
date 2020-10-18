import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { setActiveSortingTab, setDisplayedTicketsNumber } from '../../actions/actions';
import { Sorting, DISPLAYED_TICKETS_DEFAULT_NUMBER } from '../../utils/constants';
import classes from './SortingButton.module.scss';

const { CHEEP } = Sorting;

const SortingButton = (props) => {
  const { text, id, activeSortingTab, setActiveTab, setTicketsNumber, displayedTicketsNumber } = props;

  const buttonClasses = useMemo(() => {
    return classNames(
      classes['sorting-button'],
      id === CHEEP ? classes['sorting-button--cheep'] : classes['sorting-button--fast'],
      { [classes['sorting-button--active']]: id === activeSortingTab }
    );
  }, [activeSortingTab, id]);

  const buttonClickHandler = () => {
    if (id === activeSortingTab) {
      setTicketsNumber(displayedTicketsNumber);
    } else {
      setTicketsNumber(DISPLAYED_TICKETS_DEFAULT_NUMBER);
    }
    setActiveTab(id);
  };

  return (
    <button type="button" className={buttonClasses} onClick={() => buttonClickHandler()}>
      {text}
    </button>
  );
};

SortingButton.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  activeSortingTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  setTicketsNumber: PropTypes.func.isRequired,
  displayedTicketsNumber: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeSortingTab: state.activeSortingTab,
    displayedTicketsNumber: state.displayedTicketsNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveTab: (tab) => dispatch(setActiveSortingTab(tab)),
    setTicketsNumber: (number) => dispatch(setDisplayedTicketsNumber(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SortingButton));
