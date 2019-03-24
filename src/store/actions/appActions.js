import * as Types from '../types';

export function setSource(source) {
  return {
    type: Types.SET_SOURCE,
    source,
  };
}
export function setDestination(destination) {
  return {
    type: Types.SET_DESTINATION,
    destination,
  };
}
