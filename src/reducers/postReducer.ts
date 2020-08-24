import {Post} from 'src/types';
import {LOAD_POSTS, TOGGLE_BOOKED} from '../../constants';

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
    case TOGGLE_BOOKED:
      // eslint-disable-next-line no-case-declarations
      const allPosts = state.allPosts.map((item: Post) => {
        const newItem = item;
        if (newItem.id === action.payload) {
          newItem.booked = !newItem.booked;
        }
        return newItem;
      });
      return {
        ...state,
        allPosts,
        bookedPosts: allPosts.filter((item: any) => item.booked),
      };
    default:
      return state;
  }
};
