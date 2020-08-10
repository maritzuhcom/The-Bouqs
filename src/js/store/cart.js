import { ADD_TO_CART } from '../actions/cart';

const initialState = {
  items: {},
};


export default function (state = initialState, action) {
  switch (action.type) {
  case ADD_TO_CART: {
    const { product } = action.payload;
    const items = { ...state.items };

    if(items[product.id]) {
      items[product.id].quantity += 1;
    } else {
      items[product.id] = { ...product, quantity: 1 };  
    }

    return { items: { ...items } };
  }
  default: {
    return { ...state };
  }
  }
}