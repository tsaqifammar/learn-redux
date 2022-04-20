import { createStore, applyMiddleware } from 'redux';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevToolsDevelopmentOnly(applyMiddleware(logger, thunk))
);

export default store;
