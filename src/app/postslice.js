import { createSlice} from '@reduxjs/toolkit'
const initialState = [
    { id: '1', title: 'hello', content: 'hello,world!' }, { id: '2', title: 'second', content: 'second content' }]
const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        },
        postUpdate(state, action) {
            const { id, title, content } = action.payload
            const selectState = state.find(post => post.id === id)
            if (selectState) {
                selectState.title = title
                selectState.content = content
            }


        },
       
    }
})
export const { postAdded,postUpdate } = postSlice.actions
export default postSlice.reducer
