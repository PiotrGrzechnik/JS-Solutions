import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Typography, Tag } from 'antd';
import { OrderedListOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { getTagColor } from 'src/utils/getTagColor';
import { Solution } from 'src/types';

const { Text, Paragraph } = Typography;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;
const Title = styled.div`
	display: flex;
	flex-direction: column;
`;
const TagsContainer = styled.div`
	margin-top: 12px;
	filter: opacity(0.5);
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
	width: 75%;
`;
const CopyText = styled(Paragraph)`
	font-size: 18px;
`;
const Description = styled(Text)`
	padding: 0 32px;
`;
const customSyntaxStyle = {
	paddingRight: '2rem',
	filter: 'brightness(1.2)',
};

interface SolutionsProps {
	item: Solution;
	setDisplayedItem: (item) => void;
}

const Solution: React.FC<SolutionsProps> = ({ item, setDisplayedItem }) => {
	const [tabKey, setTabKey] = useState('1');

	const tabList = item.codes.map(({ key, title }) => ({
		key,
		tab: title ?? `method ${key}`,
	}));

	const renderCode = item.codes.find((element) => element.key === tabKey);

	return (
		<Container>
			<div>
				<Button type="text" icon={<OrderedListOutlined />} onClick={() => setDisplayedItem(null)}>
					List
				</Button>
			</div>
			<CardStyled
				title={
					<Title>
						<Text>{item.title}</Text>
						<TagsContainer>
							{item.tags?.map((tag) => (
								<Tag key={tag} color={getTagColor(tag)}>
									{tag}
								</Tag>
							))}
						</TagsContainer>
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
							customStyle={customSyntaxStyle}
						>
							{renderCode.code}
						</SyntaxHighlighter>

						{renderCode.example && (
							<>
								<Text type="secondary">Example</Text>
								<SyntaxHighlighter
									language="javascript"
									style={atelierForestDark}
									customStyle={customSyntaxStyle}
								>
									{renderCode.example}
								</SyntaxHighlighter>
							</>
						)}
					</CodeContainer>

					<CopyText
						copyable={{
							text: renderCode.code.trim(),
							tooltips: ['copy this snippet', 'copied!'],
						}}
					></CopyText>

					<Description type="secondary">{item.description}</Description>
				</CardContainer>
			</CardStyled>
		</Container>
	);
};

export default Solution;
