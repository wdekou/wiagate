import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import auth, { token } from './auth';
import { wisps } from '../routes/app/wisp/reducers';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  wisps,
  auth, 
  token,
})
