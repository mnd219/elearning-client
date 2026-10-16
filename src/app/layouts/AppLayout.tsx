import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import './App.css'
import { AppHeader } from "./AppHeader";
import { AppSidebar } from "./AppSidebar";

function AppLayout() {
    const { Header, Sider, Content } = Layout;
    return (
        <Layout className="app-layout">
            <Sider
                width={240}
                className="app-sidebar"
            >
                <AppSidebar />
            </Sider>

            <Layout>
                <Header className="app-header">
                    <AppHeader />
                </Header>

                <Content className="app-content">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default AppLayout;