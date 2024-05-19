
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const allArticlesUrl = "http://localhost:5000/api/articles";
const articleUrl = "http://localhost:5000/api/articles/:id";
const userArticlesUrl = "http://localhost:5000/api/articles/user";

const initialState = {
	articles : null,
	article: '',
	total : 0 ,
	isLoading: false,
	error:''
};

export const getUserArticles = createAsyncThunk('articles/getUserArticles', async(payload)=>{

	try {
		const res = await fetch(userArticlesUrl,{
			method:"POST",
			headers:{ 'Content-Type':'application/json'},
			body: JSON.stringify({userid:payload})
		});
		
		const response = await res.json();

		if(!response) {
			const error = {
				message : "Error User Not Found"
			}
			return thunkAPI.rejectWithValue(error);
		}
		console.log('errrrro',response)
    return response
	}catch(err){

		const error = {
			message : "Error User Not Found"
		}
		// console.log('errrrro')
		return thunkAPI.rejectWithValue(error);
    
	}
  
});

export const getArticles = createAsyncThunk('articles/getUserArticles', async(payload)=>{

	try {
		const res = await fetch(userArticlesUrl,{
			method:"POST",
			headers:{ 'Content-Type':'application/json'},
			body: JSON.stringify({userid:payload})
		});
		
		const response = await res.json();
	}catch(err){
    return "Error User Not Found";
	}
  
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

	extraReducers: (builder) => {
		builder.addCase(getUserArticles.pending , (state)=> {
			state.isLoading = true;
		});

		builder.addCase(getUserArticles.fulfilled, (state, action)=>{
			
			// console.log("action.payload",action.payload)
		    state.articles = action.payload; 
		    state.total = state.articles.length
		    state.isLoading = false;
		});

		builder.addCase(getUserArticles.rejected, (state, action)=>{
			
			// console.log("action.payload",action.payload)
		    state.error = action.payload;
		    state.articles = null
		    state.isLoading = false;
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
	
	