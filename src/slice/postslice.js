import { createSlice, nanoid} from '@reduxjs/toolkit'
import {sub} from 'date-fns'
import { authLogouted } from './authslice'

const reactions={
    thumbsUp:0,
    tada:0,
    heart:0,
    rocket:0,
    eyes:0,
}
const initialState = [
    { id: '0', title: 'hello', content: 'hello,world!',user:'birdy',date:sub(new Date(),{days:5}).toISOString(),reaction:reactions },
    { id: '1', title: 'second', content: 'second content',user:'cute' ,date:sub(new Date(),{days:3}).toISOString(),reaction:reactions}]
const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        postAdded:{
           reducer(state,action){
            state.push(action.payload)
           },
           prepare(title, content,user){
             return {
                payload:{id:nanoid(), title, content, user, date:new Date().toISOString(), reaction:reactions}
             }
           }
        },
        postUpdate(state, action) {
            const { id, title, content,user,date } = action.payload
            const selectState = state.find(post => post.id === id)
            if (selectState) {
                selectState.title = title
                selectState.content = content
                selectState.date=date
                selectState.user=user
            }
            console.log(selectState.date)


        },
        postDeleted(state,action){
          return  state.filter(item=>item.id!==action.payload)
             
        },
        postReactionAdded(state,action){
            const {id,reaction}=action.payload
            const selectState=state.find(item=>item.id===id)
            if(selectState)
            {
                selectState.reaction[reaction]++
            }
        }
       
    } ,
    extraReducers:(builder)=>{
           builder.addCase(authLogouted,(state)=>{
            console.log("Before reset:", state.post);
             return initialState
           })
           
        }
})
export const { postAdded,postUpdate,postDeleted,postReactionAdded } = postSlice.actions
export const selectallpost=state=>state.post
export const selectcurrentid=(state,postId)=>state.find(item=>item.id===postId)
export const selectcurrentauth=(state,usename)=>state.find(item=>item.user===usename)
export default postSlice.reducer
