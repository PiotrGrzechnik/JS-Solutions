import {Button, Card, Typography} from "antd";
import React, {useState} from "react";
import styled from "styled-components";
import {OrderedListOutlined} from "@ant-design/icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atelierForestDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
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
const CodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`;

interface SolutionsProps {
    item: Solution;
    setDisplayedItem: (item) => void;
}

const Solution: React.FC<SolutionsProps> = ({item, setDisplayedItem}) => {
    const [tabKey, setTabKey] = useState("1");

    const tabList = item.codes.map(({key, title}) => ({
        key,
        tab: title ?? `method ${key}`
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
                    <CodeContainer>
                        <SyntaxHighlighter
                            language="javascript"
                            style={atelierForestDark}
                            customStyle={{
                                paddingRight: "2rem",
                                filter: "brightness(1.2)"
                            }}
                        >
                            {renderCode.code}
                        </SyntaxHighlighter>

                        {renderCode.example && (
                            <>
                                <Text type="secondary">Example</Text>
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={atelierForestDark}
                                    customStyle={{
                                        paddingRight: "2rem",
                                        filter: "brightness(1.2)"
                                    }}
                                >
                                    {renderCode.example}
                                </SyntaxHighlighter>
                            </>
                        )}
                    </CodeContainer>
                    <Text type="secondary">{item.description}</Text>
                </CardContainer>
            </CardStyled>
        </Container>
    );
};

export default Solution;
