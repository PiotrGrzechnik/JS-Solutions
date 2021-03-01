import React from 'react';
import {
	CodepenOutlined,
	GlobalOutlined,
	SecurityScanOutlined,
	createFromIconfontCN,
} from '@ant-design/icons';
import { Category, JSSubcategory, ReactType, MenuSection } from 'src/types';

const IconFont = createFromIconfontCN({
	scriptUrl: ['//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js'],
});

export const menuSections: MenuSection[] = [
	{
		category: Category.JAVASCRIPT,
		icon: <IconFont type="icon-javascript" />,
		subcategories: [
			JSSubcategory.ARRAY,
			JSSubcategory.OBJECT,
			JSSubcategory.FUNCTION,
			JSSubcategory.STRING,
			JSSubcategory.NUMBER,
			JSSubcategory.BROWSER,
		],
	},
	{
		category: Category.ALGORITHMS,
		icon: <CodepenOutlined />,
		subcategories: [],
	},
	{
		category: Category.REACT,
		icon: <GlobalOutlined />,
		subcategories: [ReactType.HOOKS],
	},
	{
		category: Category.TESTS,
		icon: <SecurityScanOutlined />,
		subcategories: [],
	},
];
