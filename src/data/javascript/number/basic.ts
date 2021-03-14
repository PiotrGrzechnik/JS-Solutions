import { Category, JSSubcategory, Solution } from 'src/types';

export const basic: Solution[] = [
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.NUMBER,
		title: 'Get average value of arguments',
		icon: 'las la-sort-numeric-up',
		codes: [
			{
				key: '1',
				code: `
const average = (...args) => args.reduce((a, b) => a + b) / args.length
      `,
				usage: `
average(1, 2, 3, 4);

// 2.5
      `,
			},
		],
	},
];
