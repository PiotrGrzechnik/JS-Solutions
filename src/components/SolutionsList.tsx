import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card, List, Typography } from 'antd';
import { ListPath, Solution } from 'src/types';
import { capitalize, getSolutionsList } from 'src/utils';

const { Title } = Typography;

const CardStyled = styled(Card)`
	flex: 1;
`;
const TitleStyled = styled(Title)`
	text-align: center;
`;
const ListItem = styled(List.Item)``;
const ItemTitle = styled.div`
	font-size: 16px;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.primaryDark};
	}
`;

interface SolutionsListProps {
	listPath: ListPath;
	setDisplayedItem: (item) => void;
}

const SolutionsList: React.FC<SolutionsListProps> = ({ listPath, setDisplayedItem }) => {
	const [list, setList] = useState<Solution[]>([]);

	const subcategory = listPath[1];
	const title = capitalize(subcategory);

	useEffect(() => {
		getSolutionsList(listPath).then((data) => setList(data.solutions));
	}, [listPath]);

	return (
		<CardStyled title={<TitleStyled level={4}>{title}</TitleStyled>}>
			<List
				itemLayout="horizontal"
				dataSource={list}
				renderItem={(item) => (
					<ListItem>
						<List.Item.Meta
							title={<ItemTitle onClick={() => setDisplayedItem(item)}>{item.title}</ItemTitle>}
						/>
					</ListItem>
				)}
			/>
		</CardStyled>
	);
};

export default SolutionsList;
