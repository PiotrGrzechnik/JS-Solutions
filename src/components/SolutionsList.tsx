import React, { FunctionComponent, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card, List, Typography } from 'antd';
import { ListPath, Solution } from 'src/types';
import { capitalize, getSolutionsList } from 'src/utils';
import Icon from './Icon';

const { Title } = Typography;

const CardStyled = styled(Card)`
	flex: 1;
`;
const TitleStyled = styled(Title)`
	text-align: center;
`;
const ListItem = styled(List.Item)`
	padding: 6px 0;
`;
const ListItemMeta = styled(List.Item.Meta)`
	h4 {
		margin: 0;
	}
`;
const IconStyled = styled(Icon)`
	font-size: 22px;
	color: ${({ theme }) => theme.colors.primaryDark};
	margin-right: 12px;
`;
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

const SolutionsList: FunctionComponent<SolutionsListProps> = ({ listPath, setDisplayedItem }) => {
	const [list, setList] = useState<Solution[]>([]);

	const subcategory = listPath[1];
	const title = capitalize(subcategory);
	const defaultIcon = 'las la-check';

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
						<ListItemMeta
							title={
								<ItemTitle onClick={() => setDisplayedItem(item)}>
									<IconStyled name={item.icon ?? defaultIcon} />
									{item.title}
								</ItemTitle>
							}
						/>
					</ListItem>
				)}
			/>
		</CardStyled>
	);
};

export default memo(SolutionsList);
