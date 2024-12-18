import { useDispatch } from "react-redux";
import { postReactionAdded } from "../slice/postslice";
const reactionemoji={
  thumbsUp: '👍',
  tada: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}
export default function ReactionButton({post}){
    const dispatch=useDispatch()
    const reactionButtions=Object.entries(reactionemoji).map(([raectionName,emoji])=>
    <button key={raectionName}
            type="button"
            className="muted-button reaction-button"
            onClick={()=>dispatch(postReactionAdded({id:post.id,reaction:raectionName}))}
     >
        {emoji} {post.reaction[raectionName]}
        </button>
    )
    return <div>{reactionButtions}</div>
}
