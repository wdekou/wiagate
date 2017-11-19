import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import auth, { token } from './auth';

export default combineReducers({
  form: formReducer,
  router: routerReducer,
  auth, 
  token
})
