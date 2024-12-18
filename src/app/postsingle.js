import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router";
import { selectallpost, selectcurrentid } from "../slice/postslice";
import { formatDistanceToNow } from 'date-fns';
import { selectauth } from "../slice/authslice";
import './postsingle.css'
import HtmlHeader from "./loginpage/header";
import Main from "./main";
import Footer from "./footer";
import ReactionButton from "./reactionbutton";
const PostSingle = () => {
  const { PostId } = useParams()
  const posts = useSelector(selectallpost)
  const auther = useSelector(selectauth)
  const selectposts = useSelector(() => selectcurrentid(posts, PostId))
  console.log(selectposts.date)
  if (!selectposts) {
    return <div>文章加载中...</div>; // 如果没有找到对应的 post，显示加载中
  }
  return (
    <Main Head={<HtmlHeader headercontent='Article'/>} Foot={<Footer/>}>
      <article className="postlist">
        <div >
          <div className="singleheader">
            <h1 className="article-header">{selectposts.title}</h1>
          </div>
          <div className="information">
            <span className="info-name">{selectposts.user}</span>
            <span>/</span>
            <span className="info-date">{formatDistanceToNow(selectposts.date)}</span>
          </div>
          <p>{selectposts.content}</p>
          <ReactionButton post={selectposts}/>
          {auther === selectposts.user && <Link to={`/update/${selectposts.id}`}><button>修改文章</button></Link>}
          <Link to='/home' type="button">返回到主页</Link>
        </div>

      </article>
    </Main>

  );

}
export default PostSingle;