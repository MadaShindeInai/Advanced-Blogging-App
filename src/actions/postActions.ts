import {DATA} from 'src/data';
import {LOAD_POSTS, TOGGLE_BOOKED} from '../../constants';

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA,
  };
};

export const toggleBooked = (id: number) => {
  return {
    type: TOGGLE_BOOKED,
    payload: id,
  };
};
