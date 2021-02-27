import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { Category, JSType, ListPath } from 'src/types';
import { menuSections } from 'src/data/sideMenu';

const { SubMenu } = Menu;
const { Sider } = Layout;

const MenuStyled = styled(Menu)`
	height: 100%;
	border-right: ${({ theme }) => theme.colors.grey};
`;

interface SideMenuProps {
	setListPath: (listPath) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ setListPath }) => {
	const onSubcategoryClick = (data) => {
		const listPath: ListPath = data.keyPath.reverse();

		setListPath(listPath);
	};

	return (
		<Sider width={200} className="site-layout-background">
			<MenuStyled
				mode="inline"
				defaultSelectedKeys={[JSType.ARRAY]}
				defaultOpenKeys={[Category.JAVASCRIPT]}
				onClick={onSubcategoryClick}
			>
				{menuSections.map(({ category, icon, subcategories }) => (
					<SubMenu key={category} icon={icon} title={category}>
						{subcategories.map((subcategory) => (
							<Menu.Item key={subcategory}>{subcategory}</Menu.Item>
						))}
					</SubMenu>
				))}
			</MenuStyled>
		</Sider>
	);
};

export default SideMenu;
