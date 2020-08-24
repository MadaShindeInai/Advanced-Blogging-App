import {Post} from 'src/types';
import {
  LOAD_POSTS,
  TOGGLE_BOOKED,
  ADD_POST,
  REMOVE_POST,
} from '../../constants';

const initialState = {
  allPosts: [],
  bookedPosts: [],
};

type ActionType = {
  type: string;
  payload: any;
};

export const postReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((item: any) => item.booked),
      };
    case REMOVE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter(
          (item: Post) => item.id !== action.payload,
        ),
        bookedPosts: state.bookedPosts.filter(
          (item: Post) => item.id !== action.payload,
        ),
      };
    case ADD_POST:
      return {
        ...state,
        allPosts: [{...action.payload}, ...state.allPosts],
      };
    case TOGGLE_BOOKED:
      // eslint-disable-next-line no-case-declarations
      const allPostsToggle = state.allPosts.map((item: Post) => {
        const newItem = item;
        if (newItem.id === action.payload) {
          newItem.booked = !newItem.booked;
        }
        return newItem;
      });
      return {
        ...state,
        allPosts: allPostsToggle,
        bookedPosts: allPostsToggle.filter((item: any) => item.booked),
      };
    default:
      return state;
  }
};
