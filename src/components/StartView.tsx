import React, { FunctionComponent, memo } from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { menuSections } from 'src/data/sideMenu';
import { ListPath } from 'src/types';
import Icon from './Icon';

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;
const CardStyled = styled(Card)`
	min-width: 320px;
	margin: 24px;
`;
const CardTitle = styled.div`
	text-align: center;
	color: ${({ theme }) => theme.colors.primary};
`;
const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;
const bodyStyle = {
	padding: 0,
};
const Subcategory = styled.div`
	padding: 12px;
	text-align: center;
	border: 1px solid ${({ theme }) => theme.colors.lightGrey};
	cursor: pointer;
	transition: all 0.3s;

	&:not(:last-child) {
		border-bottom: 1px solid transparent;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.primaryDark};
		box-shadow: ${({ theme }) => theme.colors.lightGrey} 4px 4px 3px;
	}
`;

interface StartViewProps {
	setListPath: (listPath: ListPath) => void;
}

const StartView: FunctionComponent<StartViewProps> = ({ setListPath }) => (
	<Container>
		{menuSections.map(({ category, icon, subcategories }) => (
			<CardStyled
				key={category}
				bodyStyle={bodyStyle}
				title={
					<CardTitle>
						<Icon name={icon} />
						<span>{category}</span>
					</CardTitle>
				}
			>
				<CardBody>
					{subcategories.map((subcategory) => (
						<Subcategory key={subcategory} onClick={() => setListPath([category, subcategory])}>
							{subcategory}
						</Subcategory>
					))}
				</CardBody>
			</CardStyled>
		))}
	</Container>
);

export default memo(StartView);
