import { Map } from 'immutable';
import {
  RECEIVE_USER_DETAILS,
} from '../actions/UserActions';


const initialState = {
  username: '',
  travelgramId: '',
  friends: new Map(),
};

export default function user(state = initialState, action) {
  let friends = new Map();
  switch (action.type) {
    case RECEIVE_USER_DETAILS:
      action.data.friends_instagram.forEach((friend) => {
        friends = friends.set(friend.username, {
          id: friend.id,
          picture: friend.picture,
          username: friend.username,
        });
      });
      return { ...state, friends };
    default:
      return state;
  }
}
