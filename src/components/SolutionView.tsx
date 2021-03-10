import React, { FunctionComponent, memo, useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Typography, Tag } from 'antd';
import { OrderedListOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { getTagColor, replaceTabWithSpaces } from 'src/utils';
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
const CodeContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	max-width: 1240px;
`;
const CopyText = styled(Paragraph)`
	position: absolute;
	top: 6px;
	right: 6px;
	font-size: 18px;

	svg {
		filter: drop-shadow(0px 0px 11px ${({ theme }) => theme.colors.primary});
	}
`;
const customSyntaxStyle = {
	padding: '0 32px',
	filter: 'brightness(1.2)',
};

interface SolutionsProps {
	item: Solution;
	setDisplayedItem: (item) => void;
}

const SolutionView: FunctionComponent<SolutionsProps> = ({ item, setDisplayedItem }) => {
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
				<CodeContainer>
					<SyntaxHighlighter
						language="javascript"
						style={atelierForestDark}
						customStyle={customSyntaxStyle}
					>
						{replaceTabWithSpaces(renderCode.code)}
					</SyntaxHighlighter>

					{renderCode.usage && (
						<>
							<Text type="secondary">Usage</Text>
							<SyntaxHighlighter
								language="javascript"
								style={atelierForestDark}
								customStyle={customSyntaxStyle}
							>
								{replaceTabWithSpaces(renderCode.usage)}
							</SyntaxHighlighter>
						</>
					)}
					<CopyText
						copyable={{
							text: renderCode.code.trim(),
							tooltips: ['copy this snippet', 'copied!'],
						}}
					/>
				</CodeContainer>

				<ReactMarkdown>{item?.description}</ReactMarkdown>
			</CardStyled>
		</Container>
	);
};

export default memo(SolutionView);
