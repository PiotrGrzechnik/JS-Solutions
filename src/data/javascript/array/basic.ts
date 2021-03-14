import { Category, JSSubcategory, Solution } from 'src/types';

export const basic: Solution[] = [
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.ARRAY,
		title: 'Remove duplicates from an array',
		icon: 'las la-trash',
		codes: [
			{
				key: '1',
				title: 'filter',
				code: `
const removeDuplicatesFromArray = (arr) => arr.filter((item, index) => arr.indexOf(item) === index)
				`,
				usage: `
const arr = ['one','two','one']

removeDuplicatesFromArray(arr)

// ['one','two']
    		`,
			},
			{
				key: '2',
				title: 'Set',
				code: `
const removeDuplicatesFromArray = [...new Set(arr)]
    `,
				usage: `
const arr = ['one','two','one']

removeDuplicatesFromArray = [...new Set(arr)]

// ['one','two']
    `,
			},
			{
				key: '3',
				title: 'classic',
				code: `
const removeDuplicatesFromArray = (arr) => {
	let unique = {};
	arr.forEach((item) => {
		if(!unique[item]) {
			unique[item] = true;
		}
	});

	return Object.keys(unique);
}
    `,
				usage: `
const arr = ['one','two','one']

removeDuplicatesFromArray(arr)

// ['one','two']
    `,
			},
		],
	},
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.ARRAY,
		title: 'Count element occurrences in an array',
		icon: 'las la-calculator',
		codes: [
			{
				key: '1',
				title: 'reduce',
				code: `
const countOccurrences = (arr, val) => arr.reduce((acc, item) => (item === val ? acc + 1 : acc), 0)
    `,
				usage: `
const arr = [1, 1, 2, 1, 2, 3]

countOccurrences(arr, 1)

// 3
    `,
			},
		],
	},
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.ARRAY,
		title: 'Split array to two arrays based on condition',
		icon: 'las la-code-branch',
		description: `
### Explanation:
1. Take each item from array and invoke provided function with item as parameter
2. If function return true add to first array
3. If function return false add to second array
4. Return array of two arrays
		
				`,
		codes: [
			{
				key: '1',
				title: 'reduce',
				code: `
const bifurcateBy = (arr, fn) =>
	arr.reduce((acc, val, i) =>
		(acc[fn(val, i) ? 0 : 1].push(val), acc)
	,[[], []])
		`,
				usage: `
const arr = ['beep', 'boop', 'foo', 'bar']
const func = x => x[0] === 'b'

bifurcateBy(arr, func)

// [['beep', 'boop', 'bar'], ['foo']]
    `,
			},
		],
	},
];
