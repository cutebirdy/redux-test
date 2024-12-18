import { useDispatch } from "react-redux";
import { Button, Form, Input, Space } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState,useEffect } from "react";
import { userAdded } from "../slice/userslice";
import { useNavigate } from "react-router";
const SubmitButton = ({ form, children }) => {
    const [submittable, setSubmittable] = useState(false)
    const values = Form.useWatch([], form);
    useEffect(() => {
        form
          .validateFields({
            validateOnly: true,
          })
          .then(() => setSubmittable(true))
          .catch(() => setSubmittable(false));
      }, [form, values]);
      return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
          {children}
        </Button>
      );
}

const Register = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    function handleSubmit(){
        form.validateFields()
        const username=form.getFieldValue('name')
        const password=form.getFieldValue('password')
        dispatch(userAdded(username,password))
        alert('注册成功！')
        navigate('/login')
     
    }
    return (
        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={handleSubmit}>
            <Form.Item
                name="name"
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
                initialValue=''
            >
                <Input  prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                    },
                ]}
                initialValue=''
            >
                <Input prefix={<LockOutlined />}/>
            </Form.Item>
            <Form.Item>
                <Space>
                    <SubmitButton form={form}>Submit</SubmitButton>
                    <Button htmlType="reset">Reset</Button>
                </Space>
            </Form.Item>
        </Form>
    );



}
export default Register;