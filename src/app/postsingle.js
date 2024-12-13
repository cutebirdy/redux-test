import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router";
const PostSingle = () => {
    const {PostId} = useParams()
    const posts = useSelector(state => state.post)
    const selectpost=posts.find(post=>post.id===PostId)
    if (!selectpost) {
        return <div>文章加载中...</div>; // 如果没有找到对应的 post，显示加载中
      }
    return (
        <article>
            <h1>{selectpost.title}</h1>
            <p>{selectpost.content}</p>
            <Link to={`/update/${selectpost.id}`}><button>修改文章</button></Link>
            <Link to='/'><button>返回到主页</button></Link>
        </article>
    );

}
export default PostSingle;