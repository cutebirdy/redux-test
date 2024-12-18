
import { PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space} from 'antd';
import { useDispatch } from 'react-redux';
import { useState} from "react";
import { ownAdded } from '../../slice/ownslice';
import { selectcurrentauth } from '../../slice/postslice';
const { Option } = Select;
const Information=()=>{
  const [form]=Form.useForm()
  const user=useSelector(state=>state.auth)
  console.log(useSelector(state=>state.user))
  const id=useSelector(state=>selectcurrentauth(state.user,user))
  const dispatch=useDispatch()
  const [open,setOpen]=useState(false)
    function showDrawer(){
        setOpen(true)
        
    }
    function onClose(){
        setOpen(false)
        
        
    }
    function handleSobmit(){
      form.validateFields()
      const username=form.getFieldValue('name')
      const email=form.getFieldValue('email')
      const gender=form.getFieldValue('gender')
      const label=form.getFieldValue('Personalized signature')
      const date=form.getFieldValue('dateTime')
      const type=form.getFieldValue('article type')
      const description=form.getFieldValue('description')
      dispatch(ownAdded({id:id,username:username,gender:gender,date:date,email:email,articletype:type,label:label,description:description}))
      form.resetFields()



      
    }
   return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark
              form={form}
              onFinish={handleSobmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
                initialValue={user.username}
              >
                <Input placeholder="Please enter user name" value={user.username}/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email',
                  },
                ]}
                initialValue=''
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter your email"
                  
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: 'Please select the gender',
                  },
                ]}
                initialValue=''
              >
                <Select placeholder="Please select the gender" >
                  <Option value="xiao">man</Option>
                  <Option value="mao">woman</Option>
                  <Option value="mao">other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="article type"
                label="Article Type"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
                initialValue={['']}
              >
                <Select placeholder="Please choose the type" mode='multiple' >
                  <Option value="Narrative">Narrative - 叙事文</Option>
                  <Option value="Expository">Expository - 说明文</Option>
                  <Option value="Descriptive">Argumentative - 议论文</Option>
                  <Option value="Essay">Essay - 散文</Option>
                  <Option value="Biography">Biography - 传记</Option>
                  <Option value="Autobiography">Autobiography - 自传</Option>
                  <Option value="Report">Report - 报告</Option>
                  <Option value="Interview">Interview - 访谈</Option>

                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
          <Col span={12}>
              <Form.Item
                name="Personalized signature"
                label="Personalized signature"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your personalized signature',
                  },
                ]}
                initialValue=''
              >
                <Input placeholder="Please enter your personalized signature" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
                initialValue=''
              >
                <DatePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                  format='YYYY-MM-DD'
    
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
                initialValue=''
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
   );
}
export default Information;