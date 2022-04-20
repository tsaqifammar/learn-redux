import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

// with slice, we can define types, actions, and reducer in one place
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // just straight up mutating the state
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// 'action creators' are automatically generated for each reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// async action (they're called 'thunk's apparently)
export const incrementAsync = (amount) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };
}

export default counterSlice.reducer;
