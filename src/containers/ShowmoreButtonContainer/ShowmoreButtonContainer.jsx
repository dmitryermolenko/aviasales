import React from 'react';
import { Button } from 'antd';
import classes from './ShowmoreButtonContainer.module.scss';

const ShowmoreButtonContainer = () => {
  return (
    <Button className={classes['show-more']} type="primary" block>
      Показать еще 5 билетов
    </Button>
  );
};

export default ShowmoreButtonContainer;
