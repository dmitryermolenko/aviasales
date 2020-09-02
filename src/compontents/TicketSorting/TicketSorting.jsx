import React from 'react';
import SortingButton from '../SortingButton/SortingButton';
import classes from './TicketSorting.module.scss';

const TicketSorting = () => {
  return (
    <ul className={classes['sorting-list']}>
      <li>
        <SortingButton name="Самый дешевый" isActive id="cheep" />
      </li>
      <li>
        <SortingButton name="Самый быстрый" isActive={false} id="fast" />
      </li>
    </ul>
  );
};

export default TicketSorting;
