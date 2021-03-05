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

interface SideMenuProps {
	listPath: ListPath;
	setListPath: (listPath) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ listPath, setListPath }) => {
	const onSubcategoryClick = (data) => {
		const path: ListPath = data.keyPath.reverse();
		setListPath(path);
	};

	return (
		<Sider width={200} className="site-layout-background">
			<MenuStyled
				mode="inline"
				defaultSelectedKeys={listPath ?? []}
				defaultOpenKeys={listPath ?? []}
				onClick={onSubcategoryClick}
			>
				{menuSections.map(({ category, subcategories, icon }) => (
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
