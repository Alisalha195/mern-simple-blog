
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	articles : [
		{
			title: "Article-1",
			content : "Article-1 Content",
			author : "Article-1 Author",
			pending : true ,
			approved: false
	    } ,
	    {
			title: "Article-2",
			content : "Article-2 Content",
			author : "Article-2 Author",
			pending : true ,
			approved: false
	    } ,
	    {
			title: "Article-3",
			content : "Article-3 Content",
			author : "Article-3 Author",
			pending : true ,
			approved: false
	    } ,
	    {
			title: "Article-4",
			content : "Article-4 Content",
			author : "Article-4 Author",
			pending : true ,
			approved: false
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
	
	