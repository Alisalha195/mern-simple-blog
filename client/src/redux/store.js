import {configureStore} from '@redux/toolkit';
import articleReducer from '././ArticleSlice.js';

const store = configureStore({
  reducer : {
    article: articleReducer
  }
})