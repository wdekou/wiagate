import { push } from 'react-router-redux';

import Api from "../../../Api";

export const REQUEST_WISP_CREATION = 'REQUEST_WISP_CREATION';
export const SUCCESS_WISP_CREATION = 'SUCCESS_WISP_CREATION';
export const FAILURE_WISP_CREATION = 'FAILURE_WISP_CREATION';
export const ADD_WISP = 'ADD_WISP';
export const SET_WISPS = 'SET_WISPS';
export const SET_CURRENT_WISP = 'SET_CURRENT_WISP';

let api;

export const postWisp = ({name, slug, welcomeMessage}) => (dispatch, getState) => {
  const { token } = getState();
  
  api = new Api(token);
  dispatch({
    type: REQUEST_WISP_CREATION
  })
  return api.post('/wisps/create', {name, slug, welcomeMessage}).then((res) => {
    res.json().then((data) => {
      dispatch({
        type: ADD_WISP,
        wisp: data
      })
      dispatch(push('/app/wisps/' + data.id))

    })
  }, (err) => {

  })
}

export const getWisps = () => (dispatch, getState) => {
  const { token } = getState();
  
  api = new Api(token);
  
  return api.get('/wisps', ).then((response) => {
    response.json().then((data) => {
      dispatch({
        type: SET_WISPS,
        wisps: data
      })
    })
  })
}

export const setCurrentWisp = (wisp) => ({
  type: SET_CURRENT_WISP,
  wisp
})
