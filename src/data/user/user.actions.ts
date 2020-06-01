import { getUserData, setUsernameData, setDarkModeData } from '../dataApi';
import { ActionType } from '../../util/types';
import { UserState } from './user.state';

export const loadUserData = () => async (dispatch: React.Dispatch<any>) => {
    
    dispatch(setLoading(true));
    const data = await getUserData();  
    dispatch(setData(data));
    dispatch(setLoading(false));   
} 

export const setLoading = (isLoading: boolean) => ({
    type: 'set-user-loading',
    isLoading
} as const);

export const setData = (data: Partial<UserState>) => ({
    type: 'set-user-data',
    data
} as const);

  export const setDarkMode = (darkMode?: any) => async (dispatch: React.Dispatch<any>) => {
    await setDarkModeData(darkMode); // save local storage
    return ({
      type: 'set-dark-mode',
      darkMode
    } as const);
  };


export const setUsername = (username?: string) => async (dispatch: React.Dispatch<any>) => {
    await setUsernameData(username); // save local storage
    return ({
      type: 'set-username',
      username
    } as const);
  };

  export type UserActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setData>
  | ActionType<typeof setUsername>
  | ActionType<typeof setDarkMode>
