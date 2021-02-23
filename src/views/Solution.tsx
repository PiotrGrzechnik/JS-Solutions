import {Button, Card, Typography} from "antd";
import React, {useState} from "react";
import styled from "styled-components";
import {OrderedListOutlined} from "@ant-design/icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import {irBlack} from "react-syntax-highlighter/dist/esm/styles/hljs";

import {Solution} from "src/types";

const {Text} = Typography;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;
const Title = styled.div`
    display: flex;
    flex-direction: column;
`;
const CardStyled = styled(Card)`
    flex: 1;
`;
const CardContainer = styled.div`
    display: flex;
`;

interface SolutionsProps {
    item: Solution;
    setDisplayedItem: (item) => void;
}

const Solution: React.FC<SolutionsProps> = ({item, setDisplayedItem}) => {
    const [tabKey, setTabKey] = useState("1");

    const tabList = item.codes.map(({key}) => ({
        key,
        tab: `method ${key}`
    }));

    const renderCode = item.codes.find((element) => element.key === tabKey);

    return (
        <Container>
            <div>
                <Button
                    type="text"
                    icon={<OrderedListOutlined />}
                    onClick={() => setDisplayedItem(null)}
                >
                    List
                </Button>
            </div>
            <CardStyled
                title={
                    <Title>
                        <Text>{item.title}</Text>
                    </Title>
                }
                tabList={tabList}
                onTabChange={(key) => setTabKey(`${key}`)}
            >
                <CardContainer>
                    <SyntaxHighlighter
                        language="javascript"
                        style={irBlack}
                        customStyle={{minWidth: "70%", paddingRight: "2rem"}}
                    >
                        {renderCode.code}
                    </SyntaxHighlighter>
                    <Text type="secondary">{item.description}</Text>
                </CardContainer>
            </CardStyled>
        </Container>
    );
};

export default Solution;
