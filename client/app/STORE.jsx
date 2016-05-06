// Create and configure app store
import { createStore } from 'redux'
import pluribusApp from './REDUCERS.jsx'
export const store = createStore(pluribusApp) 
console.log(store)
// when hooking up previous user session state -> (pluribusApp, window.STATE_FROM_SERVER)

// export default function configureStore() {
//   const store = createStore(reducer, initialState, compose(
//     // applyMiddleware(...middleware),
//     window.devToolsExtension ? window.devToolsExtension() : f => f // hook redux devtools to store
//   ));
//   return store;
// }
