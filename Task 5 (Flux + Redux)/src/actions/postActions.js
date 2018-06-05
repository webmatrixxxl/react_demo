import { FETCH_POST, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  fetch('http://react-cdp-api.herokuapp.com/movies')
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_POST,
    payload: posts
  }));
}
