import React from "react";
import styled from "styled-components";
import {Layout, Menu} from "antd";
import {CodepenOutlined, GlobalOutlined, SecurityScanOutlined} from "@ant-design/icons";
import {createFromIconfontCN} from "@ant-design/icons";
import ContentSolutions from "./ContentSolutions";

const IconFont = createFromIconfontCN({
    scriptUrl: ["//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js"]
});
const {SubMenu} = Menu;
const {Header, Sider} = Layout;

const LayoutStyled = styled(Layout)`
    min-height: 100vh;
`;
const HeaderTitle = styled.h1`
    color: #1890ff;
`;
const MenuStyled = styled(Menu)`
    height: 100%;
    border-right: 0;
`;
const LayoutContentStyled = styled(Layout)`
    padding: 0 24px 24px;
`;

const Main: React.FC = () => (
    <LayoutStyled>
        <Header className="header">
            <HeaderTitle>JSSolutions</HeaderTitle>
        </Header>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <MenuStyled
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["javascript"]}
                >
                    <SubMenu
                        key="javascript"
                        icon={<IconFont type="icon-javascript" />}
                        title="javascript"
                    >
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="algorithms" icon={<CodepenOutlined />} title="algorithms">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="react" icon={<GlobalOutlined />} title="react">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                    <SubMenu key="tests" icon={<SecurityScanOutlined />} title="tests">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </MenuStyled>
            </Sider>
            <LayoutContentStyled>
                <ContentSolutions />
            </LayoutContentStyled>
        </Layout>
    </LayoutStyled>
);

export default Main;
