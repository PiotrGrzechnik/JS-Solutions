import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import SolutionsList from './SolutionsList';
import Solution from './Solution';
import { ListPath } from 'src/types';

const { Content } = Layout;

const ContentStyled = styled(Content)`
	display: flex;
	flex-direction: column;
	padding: 24px;
	margin: 0;
	min-height: 280px;
`;

interface ContentSolutionsProps {
	listPath: ListPath;
}

const ContentSolutions: React.FC<ContentSolutionsProps> = ({ listPath }) => {
	const [displayedItem, setDisplayedItem] = useState(null);

	useEffect(() => {
		setDisplayedItem(null);
	}, [listPath]);

	return (
		<ContentStyled className="site-layout-background">
			{displayedItem ? (
				<Solution item={displayedItem} setDisplayedItem={setDisplayedItem} />
			) : (
				<SolutionsList listPath={listPath} setDisplayedItem={setDisplayedItem} />
			)}
		</ContentStyled>
	);
};
export default ContentSolutions;
