import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {List, Typography} from 'antd';
import {ListPath, Solution} from 'src/types';
import {getSolutionsList} from 'src/utils/getSolutionsList';

const {Title} = Typography;

const TitleStyled = styled(Title)`
	text-align: center;
`;
const ListItem = styled(List.Item)`
	padding: 6px 0;
`;
const ItemTitle = styled.div`
	font-size: 16px;
	cursor: pointer;
`;

interface SolutionsListProps {
	listPath: ListPath;
	setDisplayedItem: (item) => void;
}

const SolutionsList: React.FC<SolutionsListProps> = ({listPath, setDisplayedItem}) => {
	const [list, setList] = useState<Solution[]>([]);

	useEffect(() => {
		getSolutionsList(listPath).then((data) => setList(data.solutions));
	}, [listPath]);

	return (
		<div>
			<TitleStyled level={4}>{listPath[listPath.length - 1]}</TitleStyled>

			<List
				itemLayout="horizontal"
				dataSource={list}
				renderItem={(item, i) => (
					<ListItem>
						<List.Item.Meta
							title={
								<ItemTitle onClick={() => setDisplayedItem(item)}>
									<span>{++i}</span> - {item.title}
								</ItemTitle>
							}
						/>
					</ListItem>
				)}
			/>
		</div>
	);
};

export default SolutionsList;
