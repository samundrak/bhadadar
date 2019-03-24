import axios from 'axios';

const FETCH_PLACES = '/places.json';
const FETCH_META = '/meta.json';

export function fetchPlaces() {
  return axios.get(FETCH_PLACES);
}

export function getMeta() {
  return axios.get(FETCH_META);
}
