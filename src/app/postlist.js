import { useSelector } from 'react-redux';
import { Link } from 'react-router';
const PostList=()=>{
    const  posts  = useSelector(state => state.post)
    
    return (
      <div className="postlist">
        
        {posts.map(post =>
          <article key={post.id}>
            <h1><Link to={`/post/${post.id}`} >{post.title}</Link></h1>
            <p>{post.content.substring(1,100)}</p>
          </article>)}
          <Link to='/postadd'><button>添加文章</button></Link>

      </div>
    );}
export default PostList;