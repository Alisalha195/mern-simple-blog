import {configureStore} from "@reduxjs/toolkit";
import articleReducer from './ArticleSlice.js';
import categoryReducer from './CategorySlice.js';
import userReducer from './UserSlice.js';
import successMsgReducer from './SuccessMsgSlice.js';

import authReducer from './AuthSlice.js';

export const store = configureStore({
  reducer : {
    article: articleReducer,
    user: userReducer,
    auth: authReducer,
    category: categoryReducer,
    successMsg : successMsgReducer

  }
})