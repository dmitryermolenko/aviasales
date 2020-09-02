import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './SortingButton.module.scss';

const SortingButton = (props) => {
  const { name, isActive, id } = props;
  const buttonClasses = classNames(
    classes['sorting-button'],
    id === 'cheep' ? classes['sorting-button--cheep'] : classes['sorting-button--fast'],
    { [classes['sorting-button--active']]: isActive }
  );

  return (
    <button type="button" className={buttonClasses}>
      {name}
    </button>
  );
};

SortingButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SortingButton;
