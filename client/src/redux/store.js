import {configureStore} from "@reduxjs/toolkit";
import articleReducer from './ArticleSlice.js';
import userReducer from './UserSlice.js';

import authReducer from './AuthSlice.js';

export const store = configureStore({
  reducer : {
    article: articleReducer,
    user: userReducer,
    auth: authReducer

  }
})