
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const getUserUrl = "http://localhost:5000/api/users";

const initialState = {
	user: null,
	isLoading: false,
	error:''
};

export const getUser = createAsyncThunk('user/getUser', async(payload,thunkAPI)=>{

	try {
		console.log('payload is',payload)
		const res = await fetch(`${getUserUrl}/${payload}`);
		
		const response = await res.json();
        console.log('response',response);

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

const userSlice = createSlice({
	name: 'user' ,
	initialState ,
	reducers : {},
	extraReducers: (builder) => {

		builder.addCase(getUser.pending , (state)=> {
			state.isLoading = true;
		});

		builder.addCase(getUser.fulfilled, (state, action)=>{
			
			// console.log("action.payload",action.payload)
		    state.user = action.payload; 
		    // state.total = state.articles.length
		    state.isLoading = false;
		});

		builder.addCase(getUser.rejected, (state, action)=>{
			
			// console.log("action.payload",action.payload)
		    state.error = action.payload;
		    state.user = null
		    state.isLoading = false;
		});
	}
});

export default userSlice.reducer;