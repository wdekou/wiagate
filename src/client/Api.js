import fetch from 'isomorphic-fetch'

const API_ROOT = '/api';
export default class Api {
  constructor(token = '') {
    this.token = token;
  }
  async get(url){
    return fetch(`${API_ROOT}${url}`, {
      method: 'GET',
      // body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        'x-access-token': this.token
      },
      credentials: "same-origin"
    });
  }

  async post (url, data){
    return fetch(`${API_ROOT}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        'x-access-token': this.token
      },
      credentials: "same-origin"
    });
  }
}
