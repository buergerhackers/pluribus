// ACTIONS for APP component

// TYPES-----------------------
// sync
export const SET_FILTER = 'SET_FILTER';
export const SELECT_TOPIC = 'SELECT_TOPIC';
// async
export const CREATE_PLURB = 'CREATE_PLURB';
export const LOAD_PLURBS = 'LOAD_PLURBS';

// CREATORS--------------------
// sync
export function selectTopic(currentTopic) {
  return { type: SELECT_TOPIC, currentTopic }
}

// async
export function createPlurb(text, user, location) {
  // post plurb -> backend API
  return { type: CREATE_PLURB, text, user, location }
}

export function loadPlurbs() {
  // get plurbs <- backend API
  let plurbs;
  return { type: LOAD_PLURBS, plurbs }
}

export const FeedFilters = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
}
