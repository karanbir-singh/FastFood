import { Breadcrumb, Menu, Layout, Image } from "antd";
import { BrowserRouter, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export default function BaseLayout(props) {
    return (
        <>
            <BrowserRouter>
                <Layout className="site-layout">
                    <Header className="layout-header" style={{  }}>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">nav 2
                            </Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content className="site-layout-content" style={{ padding: 20, marginTop: 64 }}>
                        <div className="site-content" style={{ padding: 24 }}>
                            {props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </BrowserRouter>
        </>
    );
}