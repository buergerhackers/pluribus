// ACTIONS for APP component

// TYPES-----------------------
// sync
export const SET_FILTER = 'SET_FILTER'
export const SELECT_TOPIC = 'SELECT_TOPIC'
// async
export const CREATE_PLURB = 'CREATE_PLURB'
export const LOAD_PLURBS = 'LOAD_PLURBS'

// CREATORS--------------------
// sync
export setFilter(filter) {
  return { type: SET_FILTER, filter }
}

export selectTopic(currentTopic) {
  return { type: SELECT_TOPIC, currentTopic }
}

// async
export createPlurb(text, user, location) {
  // post plurb -> backend API
  return { type: CREATE_PLURB, text, user, location }
}

export loadPlurbs() {
  // get plurbs <- backend API
  let plurbs;
  return { type: LOAD_PLURBS, plurbs }
}

export const FeedFilters = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
}
