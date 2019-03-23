import { set } from 'dot-prop-immutable';
import * as Types from '../types';

const initialState = {
  language: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.SET_LANGUAGE:
      return set(state, 'language', action.language);
    default:
      return state;
  }
}
