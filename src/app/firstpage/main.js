import { Layout } from "antd";
import HtmlHeader from "./header";
import './main.css'
const { Header, Footer, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 120,
    paddingInline: 48,
    lineHeight: '120px',
    backgroundColor: '#2d7792',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#7f7c7c',
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#2d7792',
};
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
    height:'100vh'
};
const Maininto = () => {
    return (
        <Layout style={layoutStyle} >
            <Header style={headerStyle} className="main-header"><HtmlHeader/></Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    );

}
export default Maininto;