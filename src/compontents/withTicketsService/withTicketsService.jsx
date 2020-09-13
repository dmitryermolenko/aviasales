import React from 'react';
import { TicketsServiceConsumer } from '../TicketsServiceContext/TicketsServiceContext';

const withTicketsService = () => (Component) => {
  return (props) => {
    return (
      <TicketsServiceConsumer>
        {(ticketsService) => {
          return <Component {...props} ticketsService={ticketsService} />;
        }}
      </TicketsServiceConsumer>
    );
  };
};

export default withTicketsService;
