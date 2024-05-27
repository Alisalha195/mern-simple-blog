
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
	
	actionType:null,
	showActionSuccessMsg:false,

};


const SuccessMsgSlice = createSlice({
	name: 'successMsg' ,
	initialState ,
	reducers : {
		getActionType: (state) => {
			return (state.actionType ? state.actionType : "empty");  
		},
		setActionType: (state, action) => { 
			state.actionType = action.payload;
		},
		getShowActionSuccessMsg: (state) => {
			return state.showActionSuccessMsg ; 
		},
		setShowActionSuccessMsg: (state, action) => { 
			state.showActionSuccessMsg = action.payload;
		},
	},


});
	
export const { getActionType , setActionType,
       getShowActionSuccessMsg , setShowActionSuccessMsg} = SuccessMsgSlice.actions;	
export default SuccessMsgSlice.reducer;
	
	