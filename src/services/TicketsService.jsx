import React from 'react';

export default class TicketsService extends React.Component {
  data = [];

  async getTickets() {
    const searchIdResponse = await fetch('https://front-test.beta.aviasales.ru/search');

    const { searchId } = await searchIdResponse.json();

    const ticketsResponse = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);

    let { tickets } = await ticketsResponse.json();
    tickets = tickets.slice(0, 100);

    return tickets;
  }
}
