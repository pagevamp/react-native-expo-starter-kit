import { configureStore } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { rootReducer } from './RootReducer';
import { AppApi } from '@io/services';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], // reducer that needs to be persisted
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const devMiddlewares: any[] = [];
if (__DEV__) {
  // Add dev middlewares
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat([...devMiddlewares, AppApi.middleware]),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
