import getFromObjectByString from './getFromObjectByString';

const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[getFromObjectByString(x, key)] = rv[getFromObjectByString(x, key)] || []).push(x);
    return rv;
  }, {});
};

export default groupBy;