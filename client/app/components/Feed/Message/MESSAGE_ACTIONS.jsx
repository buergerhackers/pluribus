// import selectSomething() from search component
import store from '../../../STORE.jsx';

export const ADD_FRIEND = 'ADD_FRIEND';
export const GET_FRIENDS = 'GET_FRIENDS';
export const LOAD_FRIENDS = 'LOAD_FRIENDS';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

export function removeFriend(friendGoogId) {
  // removing friend
  fetch('/api/removefriend/' + friendGoogId, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  }).then((res) => {
    // update the store friend list (myFriends)
    store.dispatch(getFriends())
  }).catch((err) => {
    console.error(err);
  });
  
  return { type: REMOVE_FRIEND, fetching: true }
}

export function addFriend(friendGoogId) {
  // adding a new friend
  fetch('/api/friend', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify({friendGoogId}),
    }).then((res) => {
      // update the store friend list (myFriends)
      store.dispatch(getFriends())
    })
      .catch((error) => {
        console.error(error);
    });
  return { type: ADD_FRIEND, fetching:true }
}

export function getFriendsPlurbs() {
  // get user's friends' plurbs
  fetch('/api/friendsplurbs', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    }).then((res) => res.text()).then((friendsPlurbs) => {
      if (friendsPlurbs) {
        // find set of friends from plurbs
        let friends = Object.keys(JSON.parse(friendsPlurbs).reduce((unique, plurb) => {
          unique[plurb.UserGoogid] = plurb.UserGoogid
          return unique;
        }, {}))
        store.dispatch(loadFriends(friends))
      } else {
        // no friends :(
        store.dispatch(loadFriends([]))
      }
    })
      .catch((error) => {
        console.error(error);
    });
  return { type: GET_PLURBS, fetching: true }
}

export function getFriends() {
  // get user's friends
  fetch('/api/friend', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    }).then((res) => res.text()).then((friends) => {
      if (friends) {
        store.dispatch(loadFriends(JSON.parse(friends).map((friend) => friend.googid)))
      } else {
        // no friends :(
        store.dispatch(loadFriends([]))
      }
    })
      .catch((error) => {
        console.error(error);
    });
  return { type: GET_FRIENDS, fetching: true }
}

export function loadFriends(myFriends) {
  return { type: LOAD_FRIENDS, fetching: false, myFriends }
}
