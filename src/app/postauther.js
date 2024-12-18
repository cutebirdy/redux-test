
import { useSelector } from 'react-redux'
import { selectCurrentid } from '../slice/userslice' 

export const PostAuthor = ({ user }) => {
  const author = useSelector((state)=>selectCurrentid(state.user,user))
  console.log(author)
//   useAppSelector((state) => selectUserById(state, userId))

  return <span>by {author.username ?? 'Unknown author'}</span>
}