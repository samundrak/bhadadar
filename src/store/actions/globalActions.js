import * as Types from '../types';

export function setLanguage(language) {
  return {
    type: Types.SET_LANGUAGE,
    language,
  };
}
