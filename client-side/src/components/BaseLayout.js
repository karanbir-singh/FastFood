import { Fastfood, Home, List } from "@material-ui/icons";
import {HomeOutlined, UnorderedListOutlined} from "@ant-design/icons";
import { Breadcrumb, Menu, Layout, Image } from "antd";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../assets/logo/KanWay_low_colors.png";

const { Header, Content, Footer } = Layout;

export default function BaseLayout(props) {
    return (
        <>
            <BrowserRouter>
                <Layout className="site-layout">
                    <Header className="layout-header">
                        <img className="logo" src={logo}></img>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                            <Menu.Item key="home" icon={<HomeOutlined />}>
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="menu" icon={<UnorderedListOutlined />}>
                                <Link to="/menu">Menù</Link>
                            </Menu.Item>
                            <Menu.Item key="prodotti" icon={<Fastfood />}>
                                <Link to="/prodotti">I nostri prodotti</Link>
                            </Menu.Item>
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