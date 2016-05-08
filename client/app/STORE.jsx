// Create and configure app store
import { createStore, compose } from 'redux'
import pluribusApp from './REDUCERS.jsx'
import { fetching } from './ACTIONS.jsx'
import { FeedFilters } from './ACTIONS.jsx'

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
  fetching: false,
}

const store = createStore(pluribusApp, { pluribusReducer: initialState }, compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : (f) => f
  )
);

export default store;
