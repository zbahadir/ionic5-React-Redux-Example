import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

const USERNAME = 'username';
const DARKMODE = 'darkMode';


export const getUserData = async () => {
    const response = await Promise.all([
      Storage.get({ key: USERNAME }),
      Storage.get({ key: DARKMODE })
    ]);

    const username = await response[0].value || undefined;
    const darkMode = await response[1].value === 'true';

    const data = {
      username,
      darkMode
    }
    return data;
}

// set test value data 
export const setUsernameData = async (username?: string) => {
    if (!username) {
      await Storage.remove({ key: USERNAME });
    } else {
      await Storage.set({ key: USERNAME, value: username });
    }
  }

  // set test value data 
export const setDarkModeData = async (darkMode?: string) => {
    if (!darkMode) {
      await Storage.remove({ key: DARKMODE });
    } else {
      await Storage.set({ key: DARKMODE, value: darkMode });
    }
  }