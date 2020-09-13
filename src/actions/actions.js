import { format, parseISO, addMinutes } from 'date-fns';

export const SET_ACTIVE_SORTING_TAB = 'SET_ACTIVE_SORTING_TAB';
export const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';

const formatStopsCountLabel = (stopsCount) => {
  let label = 'ПЕРЕСАДКИ';
  if (stopsCount === 1) {
    label = 'ПЕРЕСАДКА';
  }
  if (!stopsCount || stopsCount > 4) {
    label = 'ПЕРЕСАДОК';
  }
  return label;
};

export const loadTickets = (newTickets) => {
  return {
    type: FETCH_TICKETS_SUCCESS,
    tickets: newTickets,
  };
};

export const setActiveSortingTab = (tabId) => {
  return {
    type: SET_ACTIVE_SORTING_TAB,
    tabId,
  };
};

export const setActiveFilter = (filterId) => {
  return {
    type: SET_ACTIVE_FILTER,
    filterId,
  };
};

export const loadTicketsThunk = (service) => (dispatch) => {
  service.getTickets().then((data) => {
    let idx = 0;
    const formattedData = data.map(({ price, carrier, segments }) => {
      const [to, from] = segments;
      const {
        origin: toOrigin,
        destination: toDestination,
        date: toDepartureTime,
        stops: toStops,
        duration: toDuration,
      } = to;

      const {
        origin: fromOrigin,
        destination: fromDestination,
        date: fromDepartureTime,
        stops: fromStops,
        duration: fromDuration,
      } = from;

      return {
        // eslint-disable-next-line no-plusplus
        id: idx++,
        price: price.toLocaleString('ru'),
        carrier,
        to: {
          toOrigin,
          toDestination,
          toArrivalTime: format(new Date(addMinutes(new Date(toDepartureTime), toDuration)), 'HH:mm'),
          toDepartureTime: format(new Date(parseISO(toDepartureTime)), 'HH:mm'),
          toDuration: `${Math.floor(toDuration / 60)}ч ${toDuration % 60}м `,
          toStops: toStops.join(', '),
          toStopsCount: toStops.length,
          toStopsCountLabel: formatStopsCountLabel(toStops.length),
        },
        from: {
          fromOrigin,
          fromDestination,
          fromArrivalTime: format(new Date(addMinutes(new Date(fromDepartureTime), fromDuration)), 'HH:mm'),
          fromDepartureTime: format(new Date(parseISO(fromDepartureTime)), 'HH:mm'),
          fromDuration: `${Math.floor(fromDuration / 60)}ч ${fromDuration % 60}м `,
          fromStops: fromStops.join(', '),
          fromStopsCount: fromStops.length,
          fromStopsCountLabel: formatStopsCountLabel(fromStops.length),
        },
      };
    });

    dispatch(loadTickets(formattedData));
  });
};
