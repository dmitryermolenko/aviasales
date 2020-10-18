import { format, parseISO, addMinutes } from 'date-fns';

export const formatStopsCountLabel = (stopsCount) => {
  let label = 'ПЕРЕСАДКИ';
  if (stopsCount === 1) {
    label = 'ПЕРЕСАДКА';
  }
  if (!stopsCount || stopsCount > 4) {
    label = 'ПЕРЕСАДОК';
  }
  return label;
};

export const formatData = ({ price, carrier, segments }) => {
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
};
