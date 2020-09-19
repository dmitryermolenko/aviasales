import { format, parseISO, addMinutes } from 'date-fns';
import { formatStopsCountLabel } from '../utils/functions';

export const SET_ACTIVE_SORTING_TAB = 'SET_ACTIVE_SORTING_TAB';
export const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FILTER_TICKETS = ' FILTER_TICKETS';

export const loadTickets = (newTickets, stop) => {
  return {
    type: FETCH_TICKETS_SUCCESS,
    tickets: newTickets,
    stop,
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

export const filterTickets = (activeFilters, originalTickets, activeSortingTab) => {
  return {
    type: FILTER_TICKETS,
    activeFilters,
    originalTickets,
    activeSortingTab,
  };
};

export const loadTicketsThunk = (service) => (dispatch) => {
  service
    .getTickets()
    .then(({ tickets, stop }) => {
      const formattedData = tickets.map(({ price, carrier, segments }) => {
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
          id: Math.random(),
          price,
          carrier,
          to: {
            toOrigin,
            toDestination,
            toArrivalTime: format(new Date(addMinutes(new Date(toDepartureTime), toDuration)), 'HH:mm'),
            toDepartureTime: format(new Date(parseISO(toDepartureTime)), 'HH:mm'),
            toDuration,
            toStops: toStops.join(', '),
            toStopsCount: toStops.length,
            toStopsCountLabel: formatStopsCountLabel(toStops.length),
          },
          from: {
            fromOrigin,
            fromDestination,
            fromArrivalTime: format(new Date(addMinutes(new Date(fromDepartureTime), fromDuration)), 'HH:mm'),
            fromDepartureTime: format(new Date(parseISO(fromDepartureTime)), 'HH:mm'),
            fromDuration,
            fromStops: fromStops.join(', '),
            fromStopsCount: fromStops.length,
            fromStopsCountLabel: formatStopsCountLabel(fromStops.length),
          },
        };
      });

      dispatch(loadTickets(formattedData, stop));
    })
    .catch(() => dispatch(loadTickets([], false)));
};
