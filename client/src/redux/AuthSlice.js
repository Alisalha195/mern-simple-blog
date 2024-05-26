
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// console.log(localStorage.getItem('currentUser'))
const user = JSON.parse(localStorage.getItem('currentUser'))
const initialState = {
	currentUser:user? user : null,
	isLoading: false,
	isSuccess:false,
	error:null
};

export const signupUserAsync = createAsyncThunk('auth/signupUser', async (payload, thunkAPI)=>{
	
	try {
		console.log('payload :',payload)
		const res = await fetch("http://localhost:5000/api/auth/signup",{
			method:"POST",
			headers:{ 'Content-Type':'application/json'},
			body: JSON.stringify({username:payload.username,email:payload.email, password:payload.password, firstname:payload.firstname, lastname:payload.lastname})
		});
		
		const response = await res.json();
		console.log("response is : ",response);
		localStorage.setItem('currentUser',JSON.stringify(response));
		return response;
		
	} catch(err) {
		// console.log("oh no error !")
		// console.log(err);
		const error = {
			message : "Invalid Credentials"
		}
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

			console.log('Fulfilled in slice')
			state.isSuccess = true;
			state.currentUser = action.payload;
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
		    
		});
		builder.addCase(signupUserAsync.rejected , (state, action)=> {
			console.log('Rejected in slice')
			
			state.isSuccess = false;
			state.error = action.payload;
			state.currentUser = null;
			state.isLoading = false;			
		});

		builder.addCase(logoutAsync.fulfilled , (state, action)=> {
			console.log('logout ')
			state.currentUser = null;			
		});
	}
});
export const {reset} = AuthSlice.actions;
export default AuthSlice.reducer;