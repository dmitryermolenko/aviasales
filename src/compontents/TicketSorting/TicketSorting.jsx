import React from 'react';
import SortingButton from '../SortingButton/SortingButton';
import { SORT_BUTTONS } from '../../utils/constants';
import classes from './TicketSorting.module.scss';

const TicketSorting = () => {
  return (
    <ul className={classes['sorting-list']}>
      {SORT_BUTTONS.map(({ text, id }) => (
        <li key={id}>
          <SortingButton text={text} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default TicketSorting;
