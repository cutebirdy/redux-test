import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postslice";
import {nanoid} from '@reduxjs/toolkit';
import { Link } from "react-router";
const PostAdded=()=>{
    
    const[title,setTitle]=useState('')
    const[content,setContent]=useState('')
    const dispatch=useDispatch()
  
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            dispatch(postAdded({id:nanoid(),title,content}))
            console.log('Values: ', { title, content })
            setContent('')
            setTitle('')
            alert('提交成功！')
        }}>
            <label htmlFor="title-toadd">文章标题</label>
            <input id='title-toadd'
                   value={title}
                   type="text"
                   placeholder="请输入文章标题"
                   onChange={(e)=>setTitle(e.target.value)}
                   required
            />
            <br/>
            <label htmlFor="content-added">文章内容</label>
            <textarea id='content-added'
                   type="text"
                   placeholder="请写下你要写的内容"
                   value={content}
                   onChange={(e)=>{setContent(e.target.value)}}
                   required
            />
            
            <button >提交 </button>
            <br/>
            <Link to='/'><button >返回主页 </button></Link>
        </form>
    );
}
export default PostAdded;