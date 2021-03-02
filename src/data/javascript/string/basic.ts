import { Category, JSSubcategory, Solution } from 'src/types';

export const basic: Solution[] = [
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.STRING,
		title: 'Capitalize string',
		description: '',
		codes: [
			{
				key: '1',
				title: 'first',
				code: `
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('')
    `,
				usage: `
capitalize('dolorem ipsum')

// 'Dolorem ipsum'
    `,
			},
			{
				key: '2',
				title: 'every',
				code: `
const capitalizeEveryWord = str => str.replace(/\\b[a-z]/g, char => char.toUpperCase())
    `,
				usage: `
capitalizeEveryWord('dolorem ipsum')

// 'Dolorem Ipsum'
    `,
			},
		],
	},
];
