import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import ContentSolutions from './ContentSolutions';
import SideMenu from './SideMenu';
import { ListPath } from 'src/types';
import StartView from './StartView';

const { Header } = Layout;

const LayoutStyled = styled(Layout)`
	min-height: 100vh;
`;
const HeaderTitle = styled.h1`
	color: ${({ theme }) => theme.colors.primary};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.primaryLight};
	}
`;

const LayoutContentStyled = styled(Layout)`
	padding: 0 24px 24px;
`;

const Main: React.FC = () => {
	const [listSolutionsPath, setListSolutionsPath] = useState<ListPath | null>(null);

	return (
		<LayoutStyled>
			<Header className="header">
				<HeaderTitle onClick={() => setListSolutionsPath(null)}>JS Solutions</HeaderTitle>
			</Header>
			<Layout>
				<SideMenu listPath={listSolutionsPath} setListPath={setListSolutionsPath} />
				<LayoutContentStyled>
					{listSolutionsPath ? (
						<ContentSolutions listPath={listSolutionsPath} />
					) : (
						<StartView setListPath={setListSolutionsPath} />
					)}
				</LayoutContentStyled>
			</Layout>
		</LayoutStyled>
	);
};

export default Main;
