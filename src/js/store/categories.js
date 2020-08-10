import { GET_CATEGORIES, GOT_CATEGORIES } from '../actions/categories';

const initialState = {
  // we will not have data by default
  loading: true,
  categories: []
};

export default function(state = initialState, action) {
  switch(action.type) {
  case GET_CATEGORIES: {
    return {
      ...state,
      loading: true
    };
  }
  case GOT_CATEGORIES: {
    return {
      ...state,
      loading: false,
      categories: action.payload.data
    };
  }
  default: {
    return {...state};
  }
  }
}