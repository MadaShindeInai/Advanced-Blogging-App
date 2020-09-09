import {DATA} from 'src/data';
import {Post} from 'src/types';
import {
  LOAD_POSTS,
  TOGGLE_BOOKED,
  ADD_POST,
  REMOVE_POST,
} from '../../constants';

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

export const removePost = (id: number) => {
  return {
    type: REMOVE_POST,
    payload: id,
  };
};

export const addPost = (post: Post) => {
  const newPost = {...post, id: Date.now()};
  return {
    type: ADD_POST,
    payload: newPost,
  };
};
