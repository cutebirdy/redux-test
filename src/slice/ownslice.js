import { createSlice } from "@reduxjs/toolkit";
const initialState=[
    {id:'0',
     username:'birdy',
     gender:'woman',
     date:'2020-05-28',
     email:'my.cutebirdy@gmail.com',
     articletype:[''],
     label:'this is Birdy,this is me!',
     description:''
    }
]
const ownSlice=createSlice({
    name:'own',
    initialState,
    reducers:{
        ownAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(id,username,gender,date,email,articletype,label,description){
                return {
                    payload:{id,username,gender,date,email,articletype,label,description}
                }
            }
        },
        ownUpdated(state,action){
            const {id,email,articletype,label,description}=action.payload
            const selectown=state.find(item=>item.id===id)
            if(selectown){
                selectown.articletype=articletype
                selectown.email=email
                selectown.label=label
                selectown.description=description
            }

        }
    }

}

)
export default ownSlice.reducer;
export const {ownAdded,ownUpdated}=ownSlice.actions;
