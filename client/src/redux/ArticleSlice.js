
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const url = "http://localhost:5000/api/articles";
const initialState = {
	articles : [],
	total : 0 ,
	isLoading: false
};

export const getArticles = createAsyncThunk('article/getArticles', ()=>{
  return fetch(url).then(res=>res.json())
});
const articleSlice = createSlice({
	name: 'article' ,
	initialState ,
	reducers : {
		getArticle: (state, action)=> {
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
		builder.addCase(getArticles.fulfilled, (state, action)=>{
			state.isLoading = false;
			console.log("action.payload",action.payload)
		    state.articles = action.payload;
		})
	}
});
	
export const {getArticle} = articleSlice.actions;	
export default articleSlice.reducer;
	
	