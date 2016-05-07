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
export function createPlurb(data) {
  io.emit('createPlurb', data)

  return { type: CREATE_PLURB, fetching: true }
}

export function loadPlurbs() {
  // get plurbs <- backend API
  let plurbs;
  return { type: LOAD_PLURBS, fetching:false, plurbs }
}

export const FeedFilters = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
}
