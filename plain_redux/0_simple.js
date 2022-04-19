const { createStore } = require('redux');

/*
  - action -> { type, ... }
  - reducer
  - store
*/
  
// types
const BUY_CAKE = 'BUY_CAKE';

// "action creator", a function that returns an action which is { type, ... }
// we can add additional information, and fill them with parameters (see buyIceCream in 2_combine)
function buyCake () {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

const initialCakeState = {
  numOfCakes: 10
};

// reducer -> modify the state based on what action is being called
const reducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    };
    default: return state;
  }
}

// store -> where the states are stored. normally we'd have many states (but only 1 for this example)
const store = createStore(reducer);

console.log('Initial state: ', store.getState());

// everytime the state changes, the function within this will fire. we can use this to update UI (not recommended though).
// this store.subscribe returns the unsubscribe function so we can use this later on (not necessary)
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// let's do some actions
store.dispatch(buyCake());
store.dispatch(buyCake());

console.log('unsubscribing...');
unsubscribe();

store.dispatch(buyCake());

console.log('subscribing again...');
store.subscribe(() => console.log(store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
