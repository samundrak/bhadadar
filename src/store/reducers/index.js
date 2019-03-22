import { combineReducers } from 'redux';
import loadingReducers from './loadingReducers';

export default combineReducers({
  loading: loadingReducers,
});
