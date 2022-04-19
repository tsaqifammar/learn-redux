// exactly the same as 0_simple but add middleware
const { createStore, applyMiddleware } = require('redux');
const { createLogger } = require('redux-logger');
const logger = createLogger();

const BUY_CAKE = 'BUY_CAKE';

function buyCake () {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

const initialCakeState = {
  numOfCakes: 10
};

const reducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    };
    default: return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger));

console.log('Initial state: ', store.getState());

const unsub = store.subscribe(() => console.log('this will be run before middleware'));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsub();
