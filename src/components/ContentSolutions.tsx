import React, { FunctionComponent, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import SolutionsList from './SolutionsList';
import SolutionView from './SolutionView';
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

const ContentSolutions: FunctionComponent<ContentSolutionsProps> = ({ listPath }) => {
	const [displayedItem, setDisplayedItem] = useState(null);

	useEffect(() => {
		setDisplayedItem(null);
	}, [listPath]);

	return (
		<ContentStyled className="site-layout-background">
			{displayedItem ? (
				<SolutionView item={displayedItem} setDisplayedItem={setDisplayedItem} />
			) : (
				<SolutionsList listPath={listPath} setDisplayedItem={setDisplayedItem} />
			)}
		</ContentStyled>
	);
};

export default memo(ContentSolutions);
