const formateTime = (minutes) => {
  return `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;
};

export default formateTime;
