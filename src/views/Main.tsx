import React, {useState} from "react";
import styled from "styled-components";
import {Layout} from "antd";
import ContentSolutions from "./ContentSolutions";
import SideMenu from "./SideMenu";
import {Category, JSType, ListPath} from "src/types";

const {Header} = Layout;

const LayoutStyled = styled(Layout)`
    min-height: 100vh;
`;
const HeaderTitle = styled.h1`
    color: #1890ff;
`;

const LayoutContentStyled = styled(Layout)`
    padding: 0 24px 24px;
`;

const Main: React.FC = () => {
    const [listSolutionsPath, setListSolutionsPath] = useState<ListPath>([
        Category.JAVASCRIPT,
        JSType.ARRAY
    ]);

    return (
        <LayoutStyled>
            <Header className="header">
                <HeaderTitle>JS Solutions</HeaderTitle>
            </Header>
            <Layout>
                <SideMenu setListPath={setListSolutionsPath} />
                <LayoutContentStyled>
                    <ContentSolutions listPath={listSolutionsPath} />
                </LayoutContentStyled>
            </Layout>
        </LayoutStyled>
    );
};

export default Main;
