import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { postDeleted } from '../slice/postslice';
import { selectallpost} from '../slice/postslice';
import { selectCurrentid } from '../slice/userslice';
import { useDispatch } from 'react-redux';
import { PostAuthor } from './postauther';
import { TimeAgo } from './componets/timeago';
import Mainown from './userpage/main';
import ReactionButton from './reactionbutton';
const PostList=()=>{
  const auth=useSelector(state=>state.auth)
  const user=useSelector(state=>selectCurrentid(state.user,auth.username))
    const  posts  = useSelector(selectallpost)
    const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    const dispatch=useDispatch()
    return (
      <div >
        <Mainown>
           {orderedPosts.map(post =>
          <article key={post.id}>
            <h1><Link to={`/post/${post.id}`} >{post.title}</Link></h1>
            <div>
            <PostAuthor user={post.user} />
            <TimeAgo timestamp={post.date} />
              </div>
            <p>{post.content}</p>
            <div><ReactionButton post={post}/></div>
            <div><button onClick={()=>dispatch(postDeleted(post.id))}>删除</button></div>
          </article>)}
          {user&&<Link to={`/postadd/${user.id}`}><button>添加文章</button></Link>}
          
        </Mainown>
      </div>
    );}
  function PostExcerpt({post}){
    return (
      <div >
        <Mainown> 
          <article key={post.id}>
            <h1><Link to={`/post/${post.id}`} >{post.title}</Link></h1>
            <div>
            <PostAuthor user={post.user} />
            <TimeAgo timestamp={post.date} />
              </div>
            <p>{post.content}</p>
            <div><ReactionButton post={post}/></div>
            <div><button onClick={()=>dispatch(postDeleted(post.id))}>删除</button></div>
          </article>
          {user&&<Link to={`/postadd/${user.id}`}><button>添加文章</button></Link>}
          
        </Mainown>
      </div>
    );
  }
export default PostList;