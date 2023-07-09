import {logger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import User from './reducers/User';

const rootReducer = combineReducers({
  user: User,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
export const persistor = persistStore(store);
