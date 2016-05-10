import store from './STORE.jsx';
// ACTIONS for APP component

// TYPES-----------------------
// sync
export const SET_FILTER = 'SET_FILTER';
export const SELECT_TOPIC = 'SELECT_TOPIC';
export const UPDATE_MAP_BOUNDS = 'UPDATE_MAP_BOUNDS';
// async
export const CREATE_PLURB = 'CREATE_PLURB';
export const GET_PLURBS = 'GET_PLURBS';
export const LOAD_PLURBS = 'LOAD_PLURBS';
export const FETCHING = 'FETCHING';
export const GET_TOPICS = 'GET_TOPICS';
export const LOAD_TOPICS = 'LOAD_TOPICS';

// CREATORS--------------------
// sync
export function selectTopic(currentTopic, index) {
  fetch('/api/topic', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: currentTopic,
    }),
  }).then((topic) => {
    store.dispatch(getTopics());
  }).catch((error) => {
    console.err(error);
  });
  return { type: SELECT_TOPIC, index }
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter }
}

// async
export function updateMapBounds(mapBounds) {
  return { type: UPDATE_MAP_BOUNDS, mapBounds }
}

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
      body: options
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

export function getTopics() {
  fetch('/api/topic', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((topics) => topics.text())
      .then((topics) => {
        store.dispatch(loadTopics(topics));
    }).catch((error) => {
      console.log("This is the error in getTopics",error);
    });

  return { type: GET_TOPICS, fetching: true };
}

export function loadTopics(topics) {
  return { type: LOAD_TOPICS, fetching: false, topics }
}

export const FeedFilters = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
}
