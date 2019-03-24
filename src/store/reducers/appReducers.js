import { set } from 'dot-prop-immutable';
import { SET_SOURCE, SET_DESTINATION } from '../types';

const initialState = {
  source: null,
  destination: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SOURCE:
      return set(state, 'source', action.source);
    case SET_DESTINATION:
      return set(state, 'destination', action.destination);
    default:
      return state;
  }
}
