
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
	user:'',
	isLoading: false
};

export const loginUserAsync = createAsyncThunk('user/getUser', async (payload)=>{
	// console.log('pay',payload)
	const res = await fetch("http://localhost:5000/api/auth/login",{
		method:"POST",
		headers:{ 'Content-Type':'application/json'},
		body: JSON.stringify({email:payload.email, password:payload.password}),

	});
	
	
	if(res.ok) {
		console.log(" OK")
		const user = await res.json()
		
		return user
	} else {
		console.log("Not OK")
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
			
			console.log("action.payload",action.payload)
		    state.user = action.payload;
		    state.isLoading = false;
		});
	}
});

export default UserSlice.reducer;