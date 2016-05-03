// Front-End Dev Tips
Chrome Extensions: React Developer Tools (by Facebook), Redux DevTools
Testing: Use CLI mocha to run file tests individually

// React/Redux Relationship (FLUX)

STORE: object tree representing the state of application
- REDUCERS: pure functions f(state, ACTION) -> new state

initial state of app?

STORE.subscribe(Component)

DISPATCHER: "controller" that modifies the STORE
- figures out what to do because of ACTIONS -> send ACTION to store
- handles all asynchronous behaviors and/or impure functions

COMPONENT: "view" that notifies DISPATCHER of ACTIONS and re-renders

-----------EXAMPLE--------------------------------------------------------------

COMPONENT:
var Input = React.createClass({
  getAll: function() {
    store.dispatcher(ACTION);
  },
  render: function() {
    return some html stuff with props
  }
});

ACTION:
{
  type: "GET_MESSAGES",
  payload: []
}

STORE: (before REDUCERS)
{
  users: ["Adam","Mark","Todd"],
  current_plurbs: [
    plurbA, plurbB, plurbC, plurbD,....
  ],
  search: "",
  filter: "global"
}

STORE: (after REDUCERS)
{
 users: ["Adam","Mark","Todd"],
 current_plurbs: [
   plurbA, plurbB
 ],
 search: "dogs",
 filter: "global" 
}