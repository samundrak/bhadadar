import axios from 'axios';

const FETCH_PLACES = '/places.json';

export function fetchPlaces() {
  return axios.get(FETCH_PLACES);
}
