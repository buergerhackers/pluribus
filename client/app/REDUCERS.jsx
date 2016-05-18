//===================================================
// REDUCER for APP component
import { combineReducers } from 'redux';

import { ADD_FRIEND, GET_FRIENDS, LOAD_FRIENDS, REMOVE_FRIEND } from './components/Feed/Message/MESSAGE_ACTIONS.jsx';
import { SELECT_TOPIC, GET_TOPICS, LOAD_TOPICS, SELECT_USER, GET_USERS, LOAD_USERS } from './components/Feed/Search/SEARCH_ACTIONS.jsx';
import { FETCHING, SET_FILTER, CREATE_PLURB, LOAD_PLURBS, GET_PLURBS, UPDATE_MAP_BOUNDS, AUTHENTICATE } from './ACTIONS.jsx';

const initialState = {
  authenticated: false,
  currentTopicId: undefined,
  currentUserId: undefined,
  mapBounds: {
    maxLat:38.87,
    maxLng:-76.95,
    minLat:38.91,
    minLng:-77.00
  },
  plurbs: [],
  filter: 'TOPICS',
  myFriends: [],
  myTopics: [],
  allTopics: [],
  allUsers: [],
  myUsers: [],
  fetching: false,
  topicName: '',
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
        currentTopicId: action.topicId,
        topicName: action.topicName,
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
    case GET_TOPICS:
      return Object.assign({}, state, {
        fetching: action.fetching
      })
    case LOAD_TOPICS:
      return Object.assign({}, state, {
        allTopics: JSON.parse(action.topics),
        fetching: action.fetching
      })
    case AUTHENTICATE:
      return Object.assign({}, state, {
        authenticated: action.verified
      })
    case ADD_FRIEND:
      return Object.assign({}, state, {
        fetching: action.fetching
      })
    case REMOVE_FRIEND:
      return Object.assign({}, state, {
        fetching: action.fetching
      })
    case GET_FRIENDS:
      return Object.assign({}, state, {
        fetching: action.fetching
      })
    case LOAD_FRIENDS:
      return Object.assign({}, state, {
        myFriends: action.myFriends
      })
    case SELECT_USER:
      return Object.assign({}, state, {
        currentUserId: action.googId
      })
    case GET_USERS:
      return Object.assign({}, state, {
        fetching: action.fetching
      })
    case LOAD_USERS:
      return Object.assign({}, state, {
        allUsers: JSON.parse(action.users),
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
