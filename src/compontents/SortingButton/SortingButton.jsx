import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { setActiveSortingTab } from '../../actions/actions';
import { Sorting } from '../../utils/constants';
import classes from './SortingButton.module.scss';

const { CHEEP } = Sorting;

const SortingButton = (props) => {
  const { text, id, activeSortingTab, setActiveTab } = props;
  const buttonClasses = classNames(
    classes['sorting-button'],
    id === CHEEP ? classes['sorting-button--cheep'] : classes['sorting-button--fast'],
    { [classes['sorting-button--active']]: id === activeSortingTab }
  );

  return (
    <button type="button" className={buttonClasses} onClick={() => setActiveTab(id)}>
      {text}
    </button>
  );
};

SortingButton.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  activeSortingTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeSortingTab: state.activeSortingTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveTab: (tab) => dispatch(setActiveSortingTab(tab)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingButton);
