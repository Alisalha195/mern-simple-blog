
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const allArticlesUrl = "http://localhost:5000/api/articles";
const articleUrl = "http://localhost:5000/api/articles/:id";

const initialState = {
	articles : [],
	article: '',
	total : 0 ,
	isLoading: false
};

export const getArticles = createAsyncThunk('article/getArticles', ()=>{
  return fetch(allArticlesUrl).then(res=>res.json())
});

export const getArticle = createAsyncThunk('article/getArticle', (uid)=>{
  
  return fetch(`http://localhost:5000/api/articles/${uid}`).then(res=>res.json())
});
const articleSlice = createSlice({
	name: 'article' ,
	initialState ,
	reducers : {
		getArticle_v: (state, action)=> {
			state.articles.filter((item)=>(item.id == action.payload))
		}
	},
	// extraReducers: {
	//   [getArticles.pending] : (state)=>{
	//     state.isLoading = true;
	//     
	//   },
	//   [getArticles.fulfilled]: (state, action) => {
	//     state.isLoading = false;
	//     state.articles = action.payload;
	//   },
	//   [getArticles.rejected]: (state) => {
	//     state.isLoading = false;
	//   },
	// }

	extraReducers: (builder) => {
		builder.addCase(getArticles.pending , (state)=> {
			// state.isLoading = true;
		});

		builder.addCase(getArticles.fulfilled, (state, action)=>{
			
			// console.log("action.payload",action.payload)
		    state.articles = action.payload;
		    // state.isLoading = false;
		});

		// .....................................

		builder.addCase(getArticle.pending , (state)=> {
			state.isLoading = true;
		});

		builder.addCase(getArticle.fulfilled, (state, action)=>{
			
			// console.log("action.payload",action.payload)
		    state.article = action.payload;
		    state.isLoading = false;
		});


	}
});
	
export const {getArticle_v} = articleSlice.actions;	
export default articleSlice.reducer;
	
	