import { set } from 'dot-prop-immutable';
import { SET_SOURCE, SET_DESTINATION, SET_RESULT } from '../types';

const initialState = {
  source: null,
  destination: null,
  result: {
    distanceInKm: { en: 0 },
    fair: { en: 0 },
    oldFair: 0,
  },
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SOURCE:
      return set(state, 'source', action.source);
    case SET_DESTINATION:
      return set(state, 'destination', action.destination);
    case SET_RESULT:
      return set(
        state,
        'result',
        action.result || {
          distanceInKm: { en: 0 },
          fair: { en: 0 },
          oldFair: 0,
        },
      );
    default:
      return state;
  }
}
