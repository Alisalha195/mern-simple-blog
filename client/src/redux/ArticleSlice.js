
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const allArticlesUrl = "http://localhost:5000/api/articles";
const articleUrl = "http://localhost:5000/api/articles/:id";
const userArticlesUrl = "http://localhost:5000/api/articles/user";

const initialState = {
	allArticles: null,
	articles : null,
	currentArticle: null,
	// total : 0 ,
	isLoading: false,
	error:''
};

export const getUserArticles = createAsyncThunk('articles/getUserArticles', async(payload)=>{

	try {
		// console.log('payload is',payload)
		const res = await fetch(userArticlesUrl,{
			method:"POST",
			headers:{ 'Content-Type':'application/json'},
			body: JSON.stringify({userid:payload})
		});
		
		const response = await res.json();
    // console.log('response',response)
		if(!response || response.length == 0) {
			const error = {
				message : "Error User Not Found"
			}
			return thunkAPI.rejectWithValue(error);
		}
		// console.log('errrrro',response)
    return response
	}catch(err){

		const error = {
			message : "Error User Not Found"
		}
		// console.log('errrrro')
		return thunkAPI.rejectWithValue(error);
    
	}
  
});

export const getArticles = createAsyncThunk('articles/getAllArticles', async(payload)=>{

	try {
		const res = await fetch(allArticlesUrl);
		
		const response = await res.json();
		console.log('...articles',response)
		return response;
	}catch(err){
    const error = {
			message : "Error ,something went wrong"
		}
		console.log('errrrro')
		return thunkAPI.rejectWithValue(error);
	}
  
});

export const getArticle = createAsyncThunk('article/getArticle', async(articleId)=>{
  
 try {
		const res = await fetch(`${articleUrl}/${articleId}`);
		// console.log('response in ')
 }catch(error) {

 }
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
		    // state.total = state.articles.length
		    state.isLoading = false;
		});

		builder.addCase(getUserArticles.rejected, (state, action)=>{
			
			// console.log("action.payload",action.payload)
		    state.error = action.payload;
		    state.articles = null
		    state.isLoading = false;
		});

		// .....................................
			builder.addCase(getArticles.pending , (state)=> {
				state.isLoading = true;
			});

			builder.addCase(getArticles.fulfilled, (state, action)=>{
				
				// console.log("action.payload",action.payload)
			    state.allArticles = action.payload; 
			    
			    state.isLoading = false;
			});

			builder.addCase(getArticles.rejected, (state, action)=>{
				
				// console.log("action.payload",action.payload)
			    state.error = action.payload;
			    state.allArticles = null
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
	
	