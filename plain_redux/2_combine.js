// exactly the same as 0_simple but add middleware
const { createStore, applyMiddleware, combineReducers } = require('redux');
const { createLogger } = require('redux-logger');
const logger = createLogger();

/* =============== CAKE ================= */
const BUY_CAKE = 'BUY_CAKE';
function buyCake () {
  return {
    type: BUY_CAKE
  }
}
/* ====================================== */

/* =============== ICE CREAM ================= */
const BUY_ICECREAM = 'BUY_ICECREAM';
function buyIceCream (count = 1) {
  return {
    type: BUY_ICECREAM,
    payload: count
  }
}
/* ====================================== */

const initialCakeState = { numOfCakes: 10 };
const initialIceCreamState = { numOfIceCreams: 20 };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    };
    default: return state;
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - action.payload
    };
    default: return state;
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state: ', store.getState());

store.subscribe(() => { console.log("state's updated") });
store.dispatch(buyCake());
store.dispatch(buyIceCream(2));

/*
  we can merge every "feature" into a single place (cake n ice cream for this example)
  but as projects get bigger, this will not be ideal and hard to manage. better to make things more modular.
*/

// const initialState = { numOfCakes: 10, numOfIceCreams: 20 };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     };
//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIceCreams: state.numOfIceCreams - action.payload
//     }
//     default: return state;
//   }
// }

// const store = createStore(reducer, applyMiddleware(logger));
// store.dispatch(buyCake());
// store.dispatch(buyIceCream(2));
