import axios from 'axios';

const FETCH_PLACES = '/places.json';
const FETCH_META = '/meta.json';
const GET_RECORDS = index => `./data/vadadar_${index}.json`;

export function fetchPlaces() {
  return axios.get(FETCH_PLACES);
}

export function getMeta() {
  return axios.get(FETCH_META);
}
export function getRecords(index) {
  return axios.get(GET_RECORDS(index));
}
