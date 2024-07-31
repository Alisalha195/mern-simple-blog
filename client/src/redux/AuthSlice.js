
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {createUserService , checkFile} from "../services/user.js"

// console.log(localStorage.getItem('currentUser'))
const getUserUrl = "http://localhost:5000/api/users";
const user = JSON.parse(localStorage.getItem('currentUser'))
const initialState = {
	currentUser:user? user : null,
	isLoading: false,
	isUpdating:false,
	isSuccess:false,
	error:null
};

export const signupUserAsync = createAsyncThunk('auth/signupUser', async (payload, thunkAPI)=>{
	
	try {
		console.log('payload in slice is',payload)
		const data = await createUserService(payload)

		return data
		console.log("data :",data);
	} catch(error) {
		console.log("error in data");
		return thunkAPI.rejectWithValue(error);
	} 

});

export const loginUserAsync = createAsyncThunk('auth/loginUser', async (payload, thunkAPI)=>{
	console.log('LOGING in')
	try {
		console.log("starting fetch")
		const res = await fetch("http://localhost:5000/api/auth/login",{
			method:"POST",
			headers:{ 'Content-Type':'application/json'},
			body: JSON.stringify({email:payload.email, password:payload.password}),
		});
		
		const response = await res.json();
		console.log("response is : ",response);
		localStorage.setItem('currentUser',JSON.stringify(response));
		return response;
		
	} catch(err) {
		// console.log("oh no error !")
		// console.log(err);
		const error = {
			message : "Invalid email or password"
		}
		return thunkAPI.rejectWithValue(error);
	}

});

export const logoutAsync = createAsyncThunk('auth/logout', async(payload)=>{
	console.log('LOGING out')
	localStorage.removeItem('currentUser')
})

export const updateAuth = createAsyncThunk('auth/updateAuth',async(payload,thunkAPI)=>{
	
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


const AuthSlice = createSlice({
	name: "auth" ,
	initialState ,
	reducers: {
		reset : (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.error = null;
		}
		
	},
	extraReducers: (builder) => {
		builder.addCase(loginUserAsync.pending , (state,payload)=> {
			state.isLoading = true;
			console.log('Loading in slice',payload)
		});

		builder.addCase(loginUserAsync.fulfilled, (state, action)=>{

			console.log('Fulfilled in Auth slice')
			state.isSuccess = true;
			state.currentUser = action.payload;
			localStorage.setItem('currentUser',JSON.stringify(action.payload));
		    state.isLoading = false;
		    
		});
		builder.addCase(loginUserAsync.rejected , (state, action)=> {
			console.log('Rejected in slice')
			
			state.isSuccess = false;
			state.error = action.payload;
			state.currentUser = null;
			state.isLoading = false;			
		});

		// ...............
		builder.addCase(signupUserAsync.pending , (state,payload)=> {
			state.isLoading = true;
			console.log('Loading in slice',payload)
		});

		builder.addCase(signupUserAsync.fulfilled, (state, action)=>{

			console.log('Fulfilled in slice')
			state.isSuccess = true;
			state.currentUser = action.payload;
		    state.isLoading = false;
		    localStorage.setItem('currentUser',JSON.stringify(action.payload));
		    
		});
		builder.addCase(signupUserAsync.rejected , (state, action)=> {
			console.log('Rejected in slice')
			console.log('STATE is ',initialState)
			state.isSuccess = false;
			state.error = action.payload;
			state.currentUser = null;
			state.isLoading = false;  			
		});
		// ----------------------------------------------
		builder.addCase(updateAuth.pending , (state,payload)=> {
			state.isLoading = true;
			// console.log('Loading in slice',payload)
		});

		builder.addCase(updateAuth.fulfilled, (state, action)=>{

			console.log('Fulfilled in auth slice')
			// state.isSuccess = true;
			state.currentUser = action.payload;
			localStorage.setItem('currentUser',JSON.stringify(action.payload));
		    state.isLoading = false;
		    
		});
		builder.addCase(updateAuth.rejected , (state, action)=> {
			console.log('Rejected in auth slice')
			console.log('STATE is ',initialState)
			state.isSuccess = false;
			state.error = action.payload;
			state.currentUser = JSON.parse(localStorage.getItem('currentUser'))
			state.isLoading = false;  			
		});
		// --------------------------------------
		builder.addCase(logoutAsync.fulfilled , (state, action)=> {
			console.log('logout ')
			state.currentUser = null;			
		});
	}
});
export const {reset } = AuthSlice.actions;
export default AuthSlice.reducer;