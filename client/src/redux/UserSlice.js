
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const getUserUrl = "http://localhost:5000/api/users";
const editUserUrl = "http://localhost:5000/api/users/update"

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

export const updateUser = createAsyncThunk('user/updateUser',async(payload,thunkAPI)=>{
	try {
		console.log('payload is',payload)
		const res = await fetch(`${editUserUrl}/${payload._id}`, {
			method:"PUT",
			headers:{ 'Content-Type':'application/json'},
			body: JSON.stringify({ firstname:payload.firstname, 
				lastname:payload.lastname, username:payload.username,password:payload.password, age:payload.age, jobTitle:payload.jobTitle, breifInfo:payload.breifInfo})
		});
		
		const response = await res.json();
        console.log('response in slice ',response);

		if(!response || response.length == 0) {
			const error = {
				message : "Error Faild To Update User"
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
			console.log('STATE is ',initialState)
			// console.log("action.payload",action.payload)
		    state.error = action.payload;
		    state.user = null
		    state.isLoading = false;
		});

		// --- update user ----
		builder.addCase(updateUser.pending , (state)=> {
			state.isLoading = true;
		});

		builder.addCase(updateUser.fulfilled, (state, action)=>{
			
			// console.log("action.payload",action.payload)
		    state.user = action.payload; 
		    state.error = null;
		    state.isLoading = false;
		});

		builder.addCase(updateUser.rejected, (state, action)=>{
			console.log('STATE is ',initialState)
			// console.log("action.payload",action.payload)
		    state.error = action.payload;
		    state.user = null
		    state.isLoading = false;
		});
	}
});

export default userSlice.reducer;