
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem('currentUser'))
const initialState = {
	currentUser:user? user : null,
	isLoading: false,
	isSuccess:false,
	error:null
};

export const loginUserAsync = createAsyncThunk('user/getUser', async (payload, thunkAPI)=>{
	
	try {
		const res = await fetch("http://localhost:5000/api/auth/login",{
			method:"POST",
			headers:{ 'Content-Type':'application/json'},
			body: JSON.stringify({email:payload.email, password:payload.password}),
		});

		const response = await res.json();
		console.log("response is : ",response)
		return response;
		
	} catch(err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}

});


const UserSlice = createSlice({
	name: "user" ,
	initialState ,
	reducers: {
		reset : (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.error = null;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(loginUserAsync.pending , (state)=> {
			state.isLoading = true;
			console.log('Loading in slice')
		});

		builder.addCase(loginUserAsync.fulfilled, (state, action)=>{

			console.log('Fulfilled in slice')
				// state.error = action.payload.message;
				// state.currentUser = null
			state.isLoading = false;
			state.isSuccess = true;
			state.currentUser = action.payload;
				// state.error = null
				// return true;
			
			console.log('payload :',action.payload)
		    state.isLoading = false;
		    
		});
		builder.addCase(loginUserAsync.rejected , (state, action)=> {
			console.log('Rejected in slice')
			state.isLoading = false;
			state.isSuccess = false;
			state.error = action.payload;
			state.currentUser = null;

			console.log("action.payload.error",action.payload)
			
		});
	}
});
export const {reset} = UserSlice.actions;
export default UserSlice.reducer;