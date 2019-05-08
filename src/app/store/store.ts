import { NavLink,UserInfo } from "./models";
import {
  GET_LOGIN_STATE,
  TOGGLE_LOGIN,
  REMOVE_TODO,
  REMOVE_ALL_TODOS
} from "./actions";
import {navData} from "./data/nav"
import {userData} from "./data/user"

export interface IAppState {
  navLinks: NavLink[];
  authState: Boolean;
  userData: userData;
}
export const INITIAL_STATE: IAppState = {
  navLinks: [],
  authState: false,
  userData :{
    userid: null,
  name: null,
  level: null, 
  att: null, 
  def: null, 
  gold: null,
  inkpots: null
  }
};
export function rootReducer(state, action) {
  console.log('root reducer called',action)
  switch (action.type) {
    case GET_LOGIN_STATE:
      console.log('in get login state', state.authState)
      return Object.assign({}, state, {
        authState: state.authState
      });
    case TOGGLE_LOGIN:
    console.log('in toggle login')
      var newState = !state.authState;
      return Object.assign({}, state, {
        authState: newState
      });
    case REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(t => t.id !== action.id),
        lastUpdate: new Date()
      });
    case REMOVE_ALL_TODOS:
      return Object.assign({}, state, {
        todos: [],
        lastUpdate: new Date()
      });
  }
  return state;
}