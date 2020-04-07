import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewars = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewars));

export default store;
