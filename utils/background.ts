import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import { auth } from '../firebase';
import { updateUser } from './db';

const BACKGROUND_FETCH_TASK = 'background-fetch';

export const registerBackgroundTask = async () => {
  const isRegistered = await TaskManager.isTaskRegisteredAsync(
    BACKGROUND_FETCH_TASK
  );

  if (isRegistered) return;
  TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
    await updateUser({ credsFromFeed: 0 }, auth.currentUser.uid);
    return BackgroundFetch.Result.NewData;
  });

  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 60 * 60 * 24,
    stopOnTerminate: false,
    startOnBoot: true,
  });
};
