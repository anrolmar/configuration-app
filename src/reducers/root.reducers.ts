import { combineReducers } from 'redux';
import configurationReducer from './configuration/configuration.reducer';

const reducers = combineReducers({
  configurations: configurationReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
