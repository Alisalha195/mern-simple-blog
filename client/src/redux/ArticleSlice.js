
import {createSlice} from "reduxjs/toolkit";

const initialState = {
	articles : [],
	total : 0 ,
	isLoading: true
};

const articleSlice = createSlice({
	name: 'article' ,
	initialState ,

	reducers : {
		
	}
})