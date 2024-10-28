
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {updateUserService , checkFile} from "../services/user.js"
import {updateAuth} from "./AuthSlice.js"

const getUserUrl = "http://localhost:5000/api/users";
const editUserUrl = "http://localhost:5000/api/users/update";

const initialState = {
	users:null,
	user: null,
	isAdmin:null,
	isLoading: false,
	isUpdating: false,
	imageExists: false,
	error:''
};

export const getAllUsers = createAsyncThunk('user/getUsers', async(payload,thunkAPI)=>{

	try {
		// console.log('payload is',payload)
		const res = await fetch(getUserUrl);
		
		const response = await res.json();
        // console.log('response',response);

		if(!response || response.length == 0) {
			const error = {
				message : "Error Faild to get Users"
			}
			return thunkAPI.rejectWithValue(error);
		}
		// console.log('errrrro',response)
    return response
	}catch(err){

		const error = {
			message : "Error Faild to get Users"
		}
		// console.log('errrrro')
		return thunkAPI.rejectWithValue(error);
    
	}
  
});

export const getUser = createAsyncThunk('user/getUser', async(payload,thunkAPI)=>{

	try {
		// console.log('payload is',payload)
		const res = await fetch(`${getUserUrl}/${payload}`);
		
		const response = await res.json();
        // console.log('response',response);

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
		console.log('payload in slice is',payload.get("isAdmin"))
		const data = await updateUserService(payload , payload.get("_id"))
		
		console.log('payload in updateUserService :',data)

		// if(thunkAPI.getState(auth.currentUser.id ))
// 		console.log("thunkAPI.getState(auth.currentUser.id",thunkAPI.getState().auth.currentUser.id);
// 
// 		let currentUserId = thunkAPI.getState().auth.currentUser.id;
// 
// 		if(currentUserId == data._id) {
// 			thunkAPI.dispatch(updateAuth())
// 		}
		return data
		
	} catch(error) {
		console.log("error in data");
		return thunkAPI.rejectWithValue(error);
	} 
});

export const checkFileImage = createAsyncThunk('user/checkFile', async(payload,thunkAPI)=>{

	try {
		const response = await checkFile(payload)

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
	reducers : {
		setUsers : (state,action) => {
			state.users = action.payload;
		}
	},
	extraReducers: (builder) => {
		
		// --- get all users ----
		builder.addCase(getAllUsers.pending , (state)=> {
			state.isLoading = true;
		});

		builder.addCase(getAllUsers.fulfilled, (state, action)=>{
			
			// console.log("action.payload",action.payload)
		    state.users = action.payload; 
		    // state.total = state.articles.length
		    state.isLoading = false;
		});

		builder.addCase(getAllUsers.rejected, (state, action)=>{
			console.log('STATE is ',initialState)
			// console.log("action.payload",action.payload)
		    state.error = action.payload;
		    state.users = null
		    state.isLoading = false;
		});

		// --- get user ----
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
			// console.log('STATE is ',initialState)
			// console.log("action.payload",action.payload)
		    state.error = action.payload;
		    state.user = null
		    state.isLoading = false;
		});

		// --- update user ----
		builder.addCase(updateUser.pending , (state)=> {
			state.isLoading = true;
			state.isUpdating = true;
		});

		builder.addCase(updateUser.fulfilled, (state, action)=>{
			
			// console.log("action.payload",action.payload)
		    state.user = action.payload; 
		    state.error = null;
		    state.isLoading = false;
		    state.isUpdating = false;
		});

		builder.addCase(updateUser.rejected, (state, action)=>{
			console.log('STATE is ',initialState)
			// console.log("action.payload",action.payload)
		    state.error = action.payload;
		    state.user = null
		    state.isLoading = false;
		    state.isUpdating = false;
		});

		// --- check Image ----
		builder.addCase(checkFileImage.pending , (state)=> {
			state.imageExists = false;
		});

		builder.addCase(checkFileImage.fulfilled, (state, action)=>{
			
			// console.log("action.payload",action.payload)
		    state.imageExists = action.payload; 
		});

		builder.addCase(checkFileImage.rejected, (state, action)=>{
			console.log('STATE is ',initialState)
			// console.log("action.payload",action.payload)
		   state.imageExists = false;
		});
	}
});

export const {setUsers} = userSlice.actions
export default userSlice.reducer;