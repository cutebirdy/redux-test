import { Layout } from "antd";
import './index.css'
const { Header,  Content,Footer } = Layout;
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
    minHeight: 200,
    lineHeight: '50px',
    color: '#fff',
    backgroundColor: '#7f7c7c',
};

const footerStyle = {
    textAlign: 'center',
    height:12,
    color: '#fff',
    lineHeight: '0px',
    backgroundColor: '#2d7792',
};
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
    height:'100vh'
};
const Main = ({Head,Foot,children}) => {
    return (
        <Layout style={layoutStyle} >
            <Header style={headerStyle} className="main-header">{Head}</Header>
            <Content style={contentStyle}>{children}</Content>
            <Footer style={footerStyle}>{Foot}</Footer>
        </Layout>
    );

}
export default Main;