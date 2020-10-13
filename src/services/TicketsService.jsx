import React from 'react';

export default class TicketsService extends React.Component {
  id = null;

  baseUrl = 'https://front-test.beta.aviasales.ru';

  async getTickets() {
    if (!this.id) {
      const searchIdResponse = await fetch(`${this.baseUrl}/search`);
      const { searchId } = await searchIdResponse.json();
      this.id = searchId;
    }

    const ticketsResponse = await fetch(`${this.baseUrl}/tickets?searchId=${this.id}`);

    return ticketsResponse.json();
  }
}
