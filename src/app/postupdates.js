import { useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { postUpdate } from "./postslice";
import { useRef } from "react";
const PostUpdated=()=>{
    const inputref=useRef(null)
    const textref=useRef(null)
    const {PostId}=useParams()
    const dispatch=useDispatch() 
    const posts = useSelector(state => state.post)
    const selectpost=posts.find(post=>post.id===PostId)
    if (!selectpost) {
        return <div>文章未找到</div>;
      }
    console.log('selectpost:',selectpost)
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            console.log(inputref.current.value)
            console.log(textref.current.value)
            dispatch(postUpdate({id:selectpost.id,title:inputref.current.value,content:textref.current.value}))
        }}>
            <label htmlFor="change-titile">文章标题</label>
            <input id='changde-title'
                    type='text'
                    name="posttitle"
                    defaultValue={selectpost.title}
                    ref={inputref}
                                       
            /><br/>
            <label htmlFor="change-content">文章内容</label>
            <textarea id='change-content'
            name="postcontent"
            defaultValue={selectpost.content}
            ref={textref}
                        
            />
            <button type="submit">提交</button>
            <br/>
            <Link to='/'><button>返回文章列表</button></Link>
        </form>
    );
}
export default PostUpdated;