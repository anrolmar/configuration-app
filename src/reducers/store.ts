import { legacy_createStore as createStore } from 'redux';
import reducers from './root.reducers';

export const store = createStore(reducers);
