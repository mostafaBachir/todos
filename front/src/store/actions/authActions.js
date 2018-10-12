import { RSAA } from 'redux-api-middleware';
export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE';
export const TODO_REQUEST = '@@auth/TODO_REQUEST';
export const TODO_RECEIVED = '@@auth/TODO_RECEIVED';
export const TODO_FAILURE = '@@auth/TODO_FAILURE';

export const TODOS_REQUEST = '@@auth/TODOS_REQUEST';
export const TODOS_RECEIVED = '@@auth/TODOS_RECEIVED';
export const TODOS_FAILURE = '@@auth/TODOS_FAILURE';
export const login_or_create = (email) => ({
  [RSAA]: {
    endpoint: 'http://0.0.0.0:11000/user/',
    method: 'POST',
    body: JSON.stringify({email}),
    headers: { 'Content-Type': 'application/json' },
    types: [
      LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
    ]
  }
})
export const add_to_do = (todo_task) => ({
  [RSAA]: {
    endpoint: 'http://0.0.0.0:11000/todos/',
    method: 'POST',
    body: JSON.stringify({todo_task}),
    headers: { 'Content-Type': 'application/json' },
    types: [
      TODO_REQUEST, TODO_RECEIVED, TODO_FAILURE
    ]
  }
})
export const get_to_dos = () => ({
  [RSAA]: {
    endpoint: 'http://0.0.0.0:11000/todos/',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
      TODOS_REQUEST, TODOS_RECEIVED, TODOS_FAILURE
    ]
  }
})
