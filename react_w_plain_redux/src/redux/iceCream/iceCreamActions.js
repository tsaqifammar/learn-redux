import { BUY_ICECREAM } from './iceCreamTypes';

export const buyIceCream = (count = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: count,
  };
};
