import { useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { postUpdate } from "../slice/postslice";
import { useRef } from "react";
import { selectallpost, selectcurrentid } from "../slice/postslice";
import HtmlHeader from "./loginpage/header";
import Main from "./main";
import Footer from "./footer";
const PostUpdated = () => {
    const inputref = useRef(null)
    const textref = useRef(null)
    const { PostId } = useParams()
    const dispatch = useDispatch()
    const posts = useSelector(selectallpost)
    const selectpost = selectcurrentid(posts, PostId)
    if (!selectpost) {
        return <div>文章未找到</div>;
    }
    console.log('selectpost:', selectpost)
    return (
        <Main Head={<HtmlHeader headercontent='修改文章'/>} Foot={<Footer/>}>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(inputref.current.value)
                console.log(textref.current.value)
                dispatch(postUpdate({ id: selectpost.id, title: inputref.current.value, content: textref.current.value }))
            }}>
                <label htmlFor="change-titile">文章标题</label>
                <input id='changde-title'
                    type='text'
                    name="posttitle"
                    defaultValue={selectpost.title}
                    ref={inputref}

                /><br />
                <label htmlFor="change-content">文章内容</label>
                <textarea id='change-content'
                    name="postcontent"
                    defaultValue={selectpost.content}
                    ref={textref}

                />
                <button >提交</button>
                <br />
                
            </form>
            <Link to='/home' type="button">返回文章列表</Link>
        </Main>

    );
}
export default PostUpdated;