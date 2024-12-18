import { FloatButton } from 'antd';
import { LogoutOutlined, UserSwitchOutlined,SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { authLogouted } from '../../slice/authslice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
const Foot = () => {
    const auth=useSelector(state=>state.auth)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    function handleClick(){
        alert(`${auth.username} 已下线`)
        dispatch(authLogouted(auth))
        console.log('导航：',navigate('/'))
        

        
    }
    return (
        <div>
            Footer!
            <div>
                <FloatButton.Group
                trigger="click"
                type="primary"
                style={{
                    insetInlineEnd: 20,
                }}
                tooltip={<div>{auth.username}</div>}
                icon={<UserSwitchOutlined />}
            >
                <FloatButton icon={<SettingOutlined />}
                             tooltip={<div>Settings</div>}
                             onClick={() => console.log('onClick')} />
                <FloatButton icon={<LogoutOutlined />} 
                             tooltip={<div>Logout</div>}
                             onClick={handleClick}
                             />
            </FloatButton.Group>
            </div>
            
        </div>

    );
}
export default Foot;