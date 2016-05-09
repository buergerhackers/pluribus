//===================================================
// REDUCER for APP component
import { combineReducers } from 'redux'
import { FETCHING, SET_FILTER, FeedFilters, SELECT_TOPIC, CREATE_PLURB, LOAD_PLURBS, GET_PLURBS, UPDATE_MAP_BOUNDS } from './ACTIONS.jsx'

const initialState = {
  currentTopic: "",
  mapBounds: {
    maxLat:38.87,
    maxLng:-76.95,
    minLat:38.91,
    minLng:-77.00
  },
  plurbs: [],
  filter: FeedFilters.PUBLIC,
  myTopics: [],
  allTopics: [],
  fetching: false,
}

// COMBINED REDUCER -> yield Store
function pluribusReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetching: action.fetching
      })
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
    case UPDATE_MAP_BOUNDS:
      return Object.assign({}, state, {
        mapBounds: action.mapBounds
      })
    case GET_PLURBS:
      return Object.assign({}, state, {
        fetching: action.fetching
      })
    case LOAD_PLURBS:
      return Object.assign({}, state, {
        plurbs: JSON.parse(action.plurbs),
        fetching: action.fetching
      })
    default: 
      return state;
  }
}

const pluribusApp = combineReducers({
  pluribusReducer
})

export default pluribusApp;
