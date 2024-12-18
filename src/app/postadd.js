import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../slice/postslice";
import { Link } from "react-router";
import HtmlHeader from "./loginpage/header";
import Main from "./main";
import Footer from "./footer";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectCurrentuser } from "../slice/userslice";
const PostAdded = () => {
    const {UserId}=useParams()
    console.log('userid:',UserId)
    const user =useSelector(state => selectCurrentuser(state.user, UserId))
    console.log('user',user)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()

    return (
        <Main Head={<HtmlHeader headercontent='添加文章'/>} Foot={<Footer/>}>
            <form onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                console.log('Dispatching new post...'); 
                dispatch(postAdded( title, content,user.username))
                setContent('')
                setTitle('')
                alert('提交成功！')
            }}>
                <label htmlFor="title-toadd">文章标题</label>
                <input id='title-toadd'
                    value={title}
                    type="text"
                    placeholder="请输入文章标题"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="content-added">文章内容</label>
                <textarea id='content-added'
                    type="text"
                    placeholder="请写下你要写的内容"
                    value={content}
                    onChange={(e) => { setContent(e.target.value) }}
                    required
                />

                <button >提交 </button>
                <br />
                
               </form>
            <Link to='/home'><button >返回主页 </button></Link>
        </Main>

    );
}
export default PostAdded;