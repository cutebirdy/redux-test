import { createSlice } from "@reduxjs/toolkit";

const initialState={
    username:null,
    password:''
}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        authLoggined:{
             reducer(state,action){
                const {username,password}=action.payload
           state.username=username
           state.password=password
        },
             prepare(username,password){
                return {
                    payload:{username:username,password:password}
                }
             }
        },
          
        authLogouted(state){
           state.username=null
           state.password=null
        }
        
    }
})
export const selectauth=state=>state.username;
export default authSlice.reducer;
export const {authLoggined,authLogouted}=authSlice.actions;