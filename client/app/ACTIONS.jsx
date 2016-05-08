// ACTIONS for APP component

// TYPES-----------------------
// sync
export const SET_FILTER = 'SET_FILTER';
export const SELECT_TOPIC = 'SELECT_TOPIC';
// async
export const CREATE_PLURB = 'CREATE_PLURB';
export const LOAD_PLURBS = 'LOAD_PLURBS';
export const FETCHING = 'FETCHING';

// CREATORS--------------------
// sync
export function selectTopic(currentTopic) {
  return { type: SELECT_TOPIC, currentTopic }
}

// async
export function createPlurb(data) {
  fetch('/api/plurb', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((body) => {
    console.log("We could totally use this promise to do something useful");
  }).catch((error) => {
    console.err(error);
  });

  return { type: CREATE_PLURB, fetching: true }   
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
