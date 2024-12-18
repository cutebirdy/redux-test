import { Button, Dropdown, Space, } from 'antd';
import { LoginOutlined, UserAddOutlined, DownOutlined } from '@ant-design/icons'
import { Link } from 'react-router';

const DropDown = () => {
  
  const items = [
    {
      label: <Link to='/login'>登录</Link>,
      key: '1',
      icon: <LoginOutlined />,
    },
    {
      label: <Link to='/register'>注册</Link>,
      key: '2',
      icon: <UserAddOutlined />,
    }
  ]
  const menuProps = {
    items,
   
  };
  return (
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
}
export default DropDown;