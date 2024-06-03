

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const allCategoriessUrl = "http://localhost:5000/api/categories";
// const articleUrl = "http://localhost:5000/api/articles";
// const userArticlesUrl = "http://localhost:5000/api/articles/user";

const initialState = {
	allCategories: null,
	
	isLoading: false,
	error:''
};

// export const getUserArticles = createAsyncThunk('articles/getUserArticles', async(payload,thunkAPI)=>{
// 
// 	try {
// 		// console.log('payload is',payload)
// 		const res = await fetch(userArticlesUrl,{
// 			method:"POST",
// 			headers:{ 'Content-Type':'application/json'},
// 			body: JSON.stringify({userid:payload})
// 		});
// 		
// 		const response = await res.json();
//         console.log('response',response)
// 		if(!response || response.length == 0) {
// 			const error = {
// 				message : "Error User Not Found"
// 			}
// 			return thunkAPI.rejectWithValue(error);
// 		}
// 		// console.log('errrrro',response)
//     return response
// 	}catch(err){
// 
// 		const error = {
// 			message : "Error User Not Found"
// 		}
// 		// console.log('errrrro')
// 		return thunkAPI.rejectWithValue(error);
//     
// 	}
//   
// });

export const getCategories = createAsyncThunk('categories/getAllCategories', async(payload,thunkAPI)=>{

	try {
		const res = await fetch(allCategoriessUrl);
		
		const response = await res.json();
		console.log('...categories',response)
		return response;
	}catch(err){
    const error = {
			message : "Error ,something went wrong"
		}
		console.log('errrrro')
		return thunkAPI.rejectWithValue(error);
	}
  
});

// export const getArticle = createAsyncThunk('articles/getArticle', async(articleId,thunkAPI)=>{
//   
// 	 try {
// 			const res = await fetch(`${articleUrl}/${articleId}`);
// 			const response = await res.json();
// 			// console.log('response in slice is: ',response)
// 
// 			if(response.status == 500)
// 				return thunkAPI.rejectWithValue("error");
// 			return response;
// 	 }catch(err) {
// 		const error = {
// 				message : "Error ,something went wrong"
// 			}
// 		console.log("error.message")
// 		return thunkAPI.rejectWithValue(err);
// 	 }
// });



const categorySlice = createSlice({
	name: 'category' ,
	initialState ,
	reducers : {
	},

	extraReducers: (builder) => {
// 		builder.addCase(getUserArticles.pending , (state)=> {
// 			state.isLoading = true;
// 		});
// 
// 		builder.addCase(getUserArticles.fulfilled, (state, action)=>{
// 			
// 			// console.log("action.payload",action.payload)
// 		    state.articles = action.payload; 
// 		    // state.total = state.articles.length
// 		    state.isLoading = false;
// 		});
// 
// 		builder.addCase(getUserArticles.rejected, (state, action)=>{
// 			
// 			// console.log("action.payload",action.payload)
// 		    state.error = action.payload;
// 		    state.articles = null
// 		    state.isLoading = false;
// 		});

		// .....................................
			builder.addCase(getCategories.pending , (state)=> {
				state.isLoading = true;
			});

			builder.addCase(getCategories.fulfilled, (state, action)=>{
				
				// console.log("action.payload",action.payload)
			    state.allCategories = action.payload; 
			    
			    state.isLoading = false;
			});

			builder.addCase(getCategories.rejected, (state, action)=>{
				
				// console.log("action.payload",action.payload)
			    state.error = action.payload;
			    state.allCategories = null
			    state.isLoading = false;
			});
		// .....................................

// 		builder.addCase(getArticle.pending , (state)=> {
// 			state.isLoading = true;
// 		});
// 
// 		builder.addCase(getArticle.fulfilled, (state, action)=>{
// 			
// 			// console.log("action.payload",action.payload)
// 			console.log('Fulfilled in getArticle')
// 		    state.article = action.payload;
// 		    state.isLoading = false;
// 		});
// 		builder.addCase(getArticle.rejected,(state,action)=>{
// 			console.log('Rejected in getArticle')
// 			state.isLoading = false;
// 			 state.article = null
// 		});


	}
});
	
// export const {getArticle_v, getActionType , setActionType,
//        getShowActionSuccessMsg , setShowActionSuccessMsg
// 
// 	} = articleSlice.actions;	
export default categorySlice.reducer;
	
	