import {configureStore} from "@reduxjs/toolkit";
import articleReducer from './ArticleSlice.js';

export const store = configureStore({
  reducer : {
    article: articleReducer
  }
})