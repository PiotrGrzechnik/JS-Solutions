import React from "react";
import styled from "styled-components";
import {Layout, Menu} from "antd";
import {
    CodepenOutlined,
    GlobalOutlined,
    SecurityScanOutlined,
    createFromIconfontCN
} from "@ant-design/icons";
import {Category, JSType, ListPath} from "src/types";

const IconFont = createFromIconfontCN({
    scriptUrl: ["//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js"]
});
const {SubMenu} = Menu;
const {Sider} = Layout;

const MenuStyled = styled(Menu)`
    height: 100%;
    border-right: 0;
`;

interface SideMenuProps {
    setListPath: (listPath) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({setListPath}) => {
    const onSubcategoryClick = (data) => {
        const listPath: ListPath = data.keyPath.reverse();

        setListPath(listPath);
    };

    return (
        <Sider width={200} className="site-layout-background">
            <MenuStyled
                theme="light"
                mode="inline"
                defaultSelectedKeys={[JSType.ARRAY]}
                defaultOpenKeys={[Category.JAVASCRIPT]}
                onClick={onSubcategoryClick}
            >
                <SubMenu
                    key={Category.JAVASCRIPT}
                    icon={<IconFont type="icon-javascript" />}
                    title="javascript"
                >
                    <Menu.Item key={JSType.ARRAY}>{JSType.ARRAY}</Menu.Item>
                    <Menu.Item key={JSType.OBJECT}>{JSType.OBJECT}</Menu.Item>
                    <Menu.Item key={JSType.STRING}>{JSType.STRING}</Menu.Item>
                    <Menu.Item key={JSType.NUMBER}>{JSType.NUMBER}</Menu.Item>
                </SubMenu>
                <SubMenu key="algorithms" icon={<CodepenOutlined />} title="algorithms"></SubMenu>
                <SubMenu key="react" icon={<GlobalOutlined />} title="react"></SubMenu>
                <SubMenu key="tests" icon={<SecurityScanOutlined />} title="tests"></SubMenu>
            </MenuStyled>
        </Sider>
    );
};

export default SideMenu;
