import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import thunk from 'redux-thunk';


import articleReducer from './ArticleSlice.js';
import categoryReducer from './CategorySlice.js';
import userReducer from './UserSlice.js';
import successMsgReducer from './SuccessMsgSlice.js';

import authReducer from './AuthSlice.js';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  article: articleReducer,
  user: userReducer,
  auth: authReducer,
  category: categoryReducer,
  successMsg : successMsgReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer : persistedReducer ,
  middleware: (getDefaultMiddleWare) => 
  getDefaultMiddleWare({serializableCheck: false})
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer : {
//     article: articleReducer,
//     user: userReducer,
//     auth: authReducer,
//     category: categoryReducer,
//     successMsg : successMsgReducer
// 
//   }
// })