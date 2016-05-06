//===================================================
// REDUCER for APP component
import { combineReducers } from 'redux'
import { SET_FILTER, FeedFilters, SELECT_TOPIC, CREATE_PLURB, LOAD_PLURBS } from './ACTIONS.jsx'

// define default initial state of app
const initialState = {
  currentTopic: "",
  plurbs: [],
  filter: FeedFilters.PUBLIC,
  map: {
    center: {lat: "default.lat", lng: "default.lng"},
    zoom: 15
  },
  myTopics: [],
  allTopics: [],
  fetching: false
}

// COMBINED REDUCER -> yield Store
function pluribusReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PLURB:
      return Object.assign({}, state, {
        fetching: action.fetching
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

const pluribusApp = combineReducers({
  pluribusReducer
})

export default pluribusApp
