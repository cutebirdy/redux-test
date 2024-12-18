import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState=[{id:'0',username:'cute',password:'123456'},{id:'1',username:'birdy',password:'654321'}]
const userSlice=createSlice({
        name:'user',
        initialState,
        reducers:{
                userAdded:{
                        reducer(state,action){
                                state.push(action.payload)
 
                        },
                        prepare(username,password){
                          return {
                                payload:{id:nanoid(),username:username,password:password}
                          }
                        }
                }
                
        }
})
export default userSlice.reducer;
export const selectCurrentuser=(state,Id)=>state.find(item=>item.id===Id);
export const selectCurrentid=(state,username)=>state.find(item=>item.username===username)
export const {userAdded}=userSlice.actions