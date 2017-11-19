import { push } from 'react-router-redux'

import Api from './Api';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
export const SET_TOKEN = 'SET_TOKEN';

export const login = ({email, password}) => (dispatch, getState) => {
  const { wisp } = getState();
  const api = new Api();
  dispatch(requestLogin());
  
  api.post('/auth/login', {email, password}).then((response) => {
    response.json().then((data) => {
      // Set token
      localStorage.setItem('token', data.token);      
      dispatch(setToken(data.token));
      dispatch(push('/app/wisps'))
    })
  }), (error) => {
    console.log(error.message)
  }
}

export const signup = ({ firstName, lastName,  email, password}) => (dispatch, getState) => {  
  const { wisp } = getState();
  const api = new Api();
  dispatch(requestSignUp());
  api.post('/auth/signup', { firstName, lastName,  email, password}).then((response) => {
    /*
    console.log(response);
    console.log(response.ok);
    console.log(response.status)     //=> number 100–599
    console.log(response.statusText) //=> String
    console.log(response.headers)    //=> Headers
    console.log(response.url)        //=> String
    */
    response.json().then((data) => {
      // Set token
      localStorage.setItem('token', data.token);      
      dispatch(setToken(data.token));
      dispatch(push('/app/wisps/create'))
    })
  }), (error) => {
    console.log(error.message)
  }
}

export const requestLogin = () => ({
  type: REQUEST_LOGIN
})

export const requestSignUp = () => ({
  type: REQUEST_SIGNUP  
})

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
})
