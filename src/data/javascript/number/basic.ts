import { Category, JSType, Solution } from 'src/types';

export const basic: Solution[] = [
	{
		category: Category.JAVASCRIPT,
		subcategory: JSType.NUMBER,
		title: 'Get average value of arguments',
		codes: [
			{
				key: '1',
				code: `
const average = (...args) => args.reduce((a, b) => a + b) / args.length
      `,
				example: `
average(1, 2, 3, 4);

// Result: 2.5
      `,
			},
		],
	},
];
