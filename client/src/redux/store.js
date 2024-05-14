import {configureStore} from "@reduxjs/toolkit";
import articleReducer from './ArticleSlice.js';
import userReducer from './UserSlice.js';

export const store = configureStore({
  reducer : {
    article: articleReducer,
    user: userReducer

  }
})