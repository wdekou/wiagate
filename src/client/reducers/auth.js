import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, SET_TOKEN } from '../actions';

const initialState = {
  email: '',
  password: ''
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, { loading: true })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {success: true});
    case LOGIN_FAILURE:
      return Object.assign({}, state, {success: false});    
    default:
      return state;
  }
}

export const token = (state = localStorage.getItem('token'), action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;
    default: 
      return state;
  }
}

export default auth;
