import { Category, JSSubcategory, ReactType, MenuSection } from 'src/types';

export const menuSections: MenuSection[] = [
	{
		category: Category.JAVASCRIPT,
		icon: 'lab la-js-square',
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
		category: Category.REACT,
		icon: 'lab la-react',
		subcategories: [ReactType.HOOKS],
	},
	{
		category: Category.ALGORITHMS,
		icon: 'las la-project-diagram',
		subcategories: [],
	},
	{
		category: Category.TESTS,
		icon: 'las la-search-location',
		subcategories: [],
	},
];
