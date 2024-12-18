import { useSelector } from "react-redux";
import Information from "./information";

const HtmlHeader=()=>{
    const auth=useSelector(state=>state.auth)
    return (
     <div>
        <span>{auth.username}'s Homepage</span>
         <span ><Information/></span>
         
         
     </div>
    );
 }
 export default HtmlHeader;