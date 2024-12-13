import {configureStore} from '@reduxjs/toolkit'
import  postReducer from '../app/postslice'

export const store= configureStore(
   {
    reducer:{
        post:postReducer
    }
   }
)