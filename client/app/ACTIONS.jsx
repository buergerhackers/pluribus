import store from './STORE.jsx';
// ACTIONS for APP component

// TYPES-----------------------
// sync
export const SET_FILTER = 'SET_FILTER';
export const SELECT_TOPIC = 'SELECT_TOPIC';
// async
export const CREATE_PLURB = 'CREATE_PLURB';
export const GET_PLURBS = 'GET_PLURBS';
export const LOAD_PLURBS = 'LOAD_PLURBS';
export const FETCHING = 'FETCHING';

// CREATORS--------------------
// sync
export function selectTopic(currentTopic) {
  return { type: SELECT_TOPIC, currentTopic }
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter }
}

// async
export function createPlurb(data) {
  // data is plurb object from Maker
  fetch('/api/plurb', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((body) => {
    console.log("We could totally use this promise to do something useful");
    console.log("Mark, that's a splendid idea. How about we load them plurbs?");
    store.dispatch(getPlurbs());
  }).catch((error) => {
    console.err(error);
  });

  return { type: CREATE_PLURB, fetching: true }   
}

// ASYNC ACTIONS
export function getPlurbs(options) {
  // update getPlurbs to handle text filtering on CLIENT-SIDE
  // all plurbs are stored on client on first render, then filter on client-side
  // after initial load, only updates come from server
  // filter param 'PUBLIC', 'PRIVATE', {text}, {location}, etc. for individual plurbs
  fetch('/api/plurb', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((plurbs) => plurbs.text())
      .then((plurbs) => {
      store.dispatch(loadPlurbs(plurbs));
    }).catch((error) => {
      console.err(error);
    });
    
  return { type: GET_PLURBS, fetching: true }
}

export function loadPlurbs(plurbs) {
  return { type: LOAD_PLURBS, fetching: false, plurbs }
}

export function fetching() {
  return { type: FETCHING, fetching: true };
}

export const FeedFilters = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
}
