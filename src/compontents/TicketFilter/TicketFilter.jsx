import React from 'react';
import classes from './TicketFilter.module.scss';

const TicketFilter = () => {
  return (
    <fieldset className={classes.filter}>
      <legend className={classes.filter__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
      <ul className={classes['filter-list']}>
        <li className={classes['filter-list__item']}>
          <input id="all" className={classes.filter__checkbox} value="all" type="checkbox" />
          <label className={classes.filter__label} htmlFor="all">
            Все
          </label>
        </li>
        <li className={classes['filter-list__item']}>
          <input id="without" className={classes.filter__checkbox} value="without" type="checkbox" />
          <label className={classes.filter__label} htmlFor="without">
            Без пересадок
          </label>
        </li>
        <li className={classes['filter-list__item']}>
          <input id="one" className={classes.filter__checkbox} value="one" type="checkbox" />
          <label className={classes.filter__label} htmlFor="one">
            1 пересадка
          </label>
        </li>
        <li className={classes['filter-list__item']}>
          <input id="two" className={classes.filter__checkbox} value="two" type="checkbox" />
          <label className={classes.filter__label} htmlFor="two">
            2 пересадки
          </label>
        </li>
        <li className={classes['filter-list__item']}>
          <input id="three" className={classes.filter__checkbox} value="three" type="checkbox" />
          <label className={classes.filter__label} htmlFor="three">
            3 персадки
          </label>
        </li>
      </ul>
    </fieldset>
  );
};

export default TicketFilter;
