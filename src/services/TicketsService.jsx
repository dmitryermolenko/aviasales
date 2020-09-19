import React from 'react';

export default class TicketsService extends React.Component {
  id = null;

  async getTickets() {
    if (!this.id) {
      const searchIdResponse = await fetch('https://front-test.beta.aviasales.ru/search');
      const { searchId } = await searchIdResponse.json();
      this.id = searchId;
    }

    const ticketsResponse = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.id}`);

    return ticketsResponse.json();
  }
}
