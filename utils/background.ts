import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import { auth } from '../firebase';
import { getUser, updateUser } from './db';

const BACKGROUND_FETCH_TASK_1 = 'background-fetch-1';
const BACKGROUND_FETCH_TASK_2 = 'background-fetch-2';

export const registerBackgroundTask1 = async () => {
  const isRegistered = await TaskManager.isTaskRegisteredAsync(
    BACKGROUND_FETCH_TASK_1
  );

  if (isRegistered) return;
  TaskManager.defineTask(BACKGROUND_FETCH_TASK_1, async () => {
    await updateUser({ credsFromFeed: 0 }, auth.currentUser.uid);
    return BackgroundFetch.Result.NewData;
  });

  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK_1, {
    minimumInterval: 60 * 60 * 24,
    stopOnTerminate: false,
    startOnBoot: true,
  });
};

export const registerBackgroundTask2 = async () => {
  const isRegistered = await TaskManager.isTaskRegisteredAsync(
    BACKGROUND_FETCH_TASK_2
  );

  if (isRegistered) return;
  TaskManager.defineTask(BACKGROUND_FETCH_TASK_2, async () => {
    const user = await getUser(auth.currentUser.uid);
    if (user && user.weeklyCreds === 0) {
      await updateUser(
        { credibility: user.credibility - 10, weeklyCreds: 0 },
        auth.currentUser.uid
      );
    } else {
      await updateUser({ weeklyCreds: 0 }, auth.currentUser.uid);
    }
    return BackgroundFetch.Result.NewData;
  });

  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK_2, {
    minimumInterval: 60 * 60 * 24 * 7,
    stopOnTerminate: false,
    startOnBoot: true,
  });
};
