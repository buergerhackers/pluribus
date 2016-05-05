//===================================================
// REDUCER for APP component

import { FeedFilters } from '.../ACTIONS.js'

// define default initial state of app
const initialState = {
  currentTopic: "",
  plurbs: [],
  filter: FeedFilters.PUBLIC,
  map: {
    center: {lat: default.lat, lng: default.lng},
    zoom: 15
  },
  myTopics: [],
  allTopics: []
}

// COMBINED REDUCER -> yield Store
pluribusApp(state = initialState, action) {
  switch (action.type) {
    case CREATE_PLURB:
      return Object.assign({}, state, {
        
      })
    case SET_FILTER:
      return Object.assign({}, state, {
        filter: action.filter
      })
    case SELECT_TOPIC:
      return Object.assign({}, state, {
        currentTopic: action.currentTopic
      })
    case LOAD_PLURBS:
      return Object.assign({}, state, {
        plurbs: action.plurbs
      })
  }
  return state
}
