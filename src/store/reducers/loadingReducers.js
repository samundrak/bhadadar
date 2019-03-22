import { set } from 'dot-prop-immutable';
import * as Types from '../types';

const initialState = {
  isRootLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.ROOT_LOADING_START:
      return set(state, 'isRootLoading', true);
    case Types.ROOT_LOADING_STOP:
      return set(state, 'isRootLoading', false);
    default:
      return state;
  }
}
