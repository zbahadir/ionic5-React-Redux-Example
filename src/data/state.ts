import { combineReducers } from './combineReducers';
import { userReducer } from './user/user.reducer';

export const initialState: AppState = {
   user: {
    hasSeenTutorial: false,
    darkMode: false,
    isLoggedin: false,
    loading: false
  }
};

export const reducers = combineReducers({
  user: userReducer
});

export type AppState = ReturnType<typeof reducers>;