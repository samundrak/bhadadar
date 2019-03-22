import * as Types from '../types';

export function rootLoadingStart() {
  return {
    type: Types.ROOT_LOADING_START,
  };
}

export function rootLoadingStop() {
  return {
    type: Types.ROOT_LOADING_STOP,
  };
}
