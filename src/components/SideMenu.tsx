import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { ListPath } from 'src/types';
import { menuSections } from 'src/data/sideMenu';

const { SubMenu } = Menu;
const { Sider } = Layout;

const MenuStyled = styled(Menu)`
	height: 100%;
	border-right: ${({ theme }) => theme.colors.grey};
`;
const MenuItemStyled = styled(Menu.Item)`
	&:hover {
		color: ${({ theme }) => theme.colors.primaryDark};
	}
`;

interface SideMenuProps {
	listPath: ListPath;
	setListPath: (listPath) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ listPath, setListPath }) => {
	const onSubcategoryClick = (data) => {
		const [subcategory, category] = data.keyPath;
		const path: ListPath = [category, subcategory];
		setListPath(path);
	};

	const selectedKeys = listPath?.[1] ? [listPath?.[1]] : null;

	return (
		<Sider width={200} className="site-layout-background">
			<MenuStyled mode="inline" selectedKeys={selectedKeys} onClick={onSubcategoryClick}>
				{menuSections.map(({ category, subcategories, icon }) => (
					<SubMenu key={category} icon={icon} title={category}>
						{subcategories.map((subcategory) => (
							<MenuItemStyled key={subcategory}>{subcategory}</MenuItemStyled>
						))}
					</SubMenu>
				))}
			</MenuStyled>
		</Sider>
	);
};

export default SideMenu;