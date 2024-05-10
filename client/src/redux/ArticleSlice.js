
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	articles : [
		{
			title: "Article-1",
			content : "Article-1 Content",
			author : "Article-1 Author",
			pending : true ,
			approved: false,
			likes: 300,
			dislikes:20
	    } ,
	    {
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
	],
	total : 0 ,
	isLoading: true
};

const articleSlice = createSlice({
	name: 'article' ,
	initialState ,
	})
	
	export default articleSlice.reducer;
	
	