import { useSelector } from "react-redux";
import { useState } from "react";
import { selectCurrentuser } from "../slice/userslice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authLoggined } from "../slice/authslice";
import Footer from "./footer/index";
import HtmlHeader from "./loginpage/header";
import Main from "./main";

const Login = () => {
    const selectuser = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [password, setPassword] = useState('')
    const [userid, setUserid] = useState('0')
    const navigate = useNavigate()
    const Currentuser = useSelector(() => selectCurrentuser(selectuser, userid))
    function handleSubmit(e) {
        e.preventDefault()
        if (Currentuser.password === password) {
            alert(`用户 ${Currentuser.username} 登录成功！`)
            dispatch(authLoggined(Currentuser.username, Currentuser.password))
            navigate('/home')
        }
        else {
            alert(`登录失败请重新操作`)
        }


    }
    return (
        <div>
            <Main Head={<HtmlHeader headercontent='User Login'/>} Foot={<Footer />}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="authername">用户名：</label>
                    <select id="authername" name="authername" onChange={(e) => setUserid(e.target.value)} required >
                        <option value=""></option>
                        {selectuser.map(user => { return <option value={user.id} key={user.id}>{user.username}</option> })}
                    </select><br/>
                    <label htmlFor="autherpassword">密码：</label>
                    <input id='autherpassword'
                        name="autherpassword"
                        placeholder="请输入密码"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required
                    />
                    <button>登录</button>

                </form>
            </Main>


        </div>
    );
}
export default Login;