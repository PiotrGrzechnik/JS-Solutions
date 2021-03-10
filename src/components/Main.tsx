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
`;

const LayoutContentStyled = styled(Layout)`
	padding: 0 24px 24px;
`;

const Main: React.FC = () => {
	const [listPath, setListPath] = useState<ListPath | null>(null);

	return (
		<LayoutStyled>
			<Header className="header">
				<HeaderTitle onClick={() => setListPath(null)}>JS Solutions</HeaderTitle>
			</Header>
			<Layout>
				<SideMenu listPath={listPath} setListPath={setListPath} />
				<LayoutContentStyled>
					{listPath ? (
						<ContentSolutions listPath={listPath} />
					) : (
						<StartView setListPath={setListPath} />
					)}
				</LayoutContentStyled>
			</Layout>
		</LayoutStyled>
	);
};

export default Main;
