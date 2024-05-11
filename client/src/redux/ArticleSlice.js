
import {createSlice} from "@reduxjs/toolkit";

const url = "";
const initialState = {
	articles : [
		{
			id: "6627b210139a7fea42c1f767",
			title: "Article-1",
			content : "Article-1 Content",
			author : "Article-1 Author",
			pending : true ,
			approved: false,
			likes: 3400000,
			dislikes:20
	    } ,
	    {
	    	id: "6627b1fa139a7fea42c1f764",
			title: "Article-2",
			content : "Article-2 Content",
			author : "Article-2 Author",
			pending : true ,
			approved: false,
			likes: 200,
			dislikes: 20
	    } ,
	    {
			title: "Article-3",
			content : "Article-3 Content",
			author : "Article-3 Author",
			pending : true ,
			approved: false,
			likes: 100,
		  dislikes: 30
	
	    } ,
	    {
			title: "Article-4",
			content : "Article-4 Content",
			author : "Article-4 Author",
			pending : true ,
			approved: false,
			likes: 215,
		  dislikes: 40    
	    } ,
	    {
			title: "Article-5",
			content : "Article-5 Content",
			author : "Article-5 Author",
			pending : true ,
			approved: false,
			likes: 3400000,
		  dislikes: 40    
	    } ,
	],
	total : 0 ,
	isLoading: false
};

export const getArticles = createAsyncThunk('article/getArticles', ()=>{
  return fetch(url).then(res=>res.json().articles)
});
const articleSlice = createSlice({
	name: 'article' ,
	initialState ,
	reducers : {
		getArticle: (state, action)=> {
			state.articles.filter((item)=>(item.id == action.payload))
		}
	},
	extraReducers: {
	  [getArticles.pending] : (state)=>{
	    state.isLoading = true;
	    
	  },
	  [getArticles.fulfilled]: (state, action) => {
	    state.isLoading = false;
	    state.articles = action.payload;
	  },
	  [getArticles.rejected]: (state) => {
	    state.isLoading = false;
	  },
	}
});
	
export const {getArticle} = articleSlice.actions;	
export default articleSlice.reducer;
	
	