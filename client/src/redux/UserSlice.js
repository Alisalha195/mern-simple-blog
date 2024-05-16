
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
	currentUser:{},
	isLoading: false,
	error:null
};

export const loginUserAsync = createAsyncThunk('user/getUser', async (payload)=>{
	
	const res = await fetch("http://localhost:5000/api/auth/login",{
		method:"POST",
		headers:{ 'Content-Type':'application/json'},
		body: JSON.stringify({email:payload.email, password:payload.password}),

	});
	
	
	if(res.ok) {

		console.log(" OK")
		const response = await res.json()
		console.log("response is: ",response)

		return response;

	} else {
		const response = await res.json()
		// console.log("response is: ",response)

		return response;
	}

});


const UserSlice = createSlice({
	name: "user" ,
	initialState ,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(loginUserAsync.pending , (state)=> {
			state.isLoading = true;
		});

		builder.addCase(loginUserAsync.fulfilled, (state, action)=>{

			if(action.payload.statusCode ) {
				state.error = action.payload.message;
				state.currentUser = null
			} else {
				state.error = null
				state.currentUser = action.payload;
				const user = state.currentUser
				// return true;
			}
			console.log('payload :',action.payload)
		    state.isLoading = false;
		    
		});
		builder.addCase(loginUserAsync.rejected , (state, action)=> {
			state.error = action.payload;
			console.log("action.payload.error",action.payload)
			state.isLoading = false;
		});
	}
});

export default UserSlice.reducer;