import {configureStore} from '@reduxjs/toolkit'
import  postReducer from '../slice/postslice'
import userReducer from '../slice/userslice'
import authReducer from '../slice/authslice'
import ownReducer from '../slice/ownslice'

export const store= configureStore(
   {
    reducer:{
        post:postReducer,
        user:userReducer,
        auth:authReducer,
        own:ownReducer,
    }
   }
)