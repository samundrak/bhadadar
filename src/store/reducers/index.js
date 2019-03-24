import { combineReducers } from 'redux';
import loadingReducers from './loadingReducers';
import globalReducers from './global';
import app from './appReducers';

export default combineReducers({
  loading: loadingReducers,
  global: globalReducers,
  app,
});
