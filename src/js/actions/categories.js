import axios from 'axios';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GOT_CATEGORIES = 'GOT_CATEGORIES';

export const getCategories = () => dispatch => {
  dispatch({
    type: GET_CATEGORIES,
  });
  axios.get('http://localhost:8081/api/categories').then(({ data }) => {
    dispatch({
      type: GOT_CATEGORIES,
      payload: { data: data },
    });
  }).catch((error) => {
    dispatch({
      type: GOT_CATEGORIES,
      payload: { error },
    });
  });    
};
