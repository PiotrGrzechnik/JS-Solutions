import { Category, JSSubcategory, Solution } from 'src/types';

export const basic: Solution[] = [
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.FUNCTION,
		title: 'Pipe (function composition)',
		icon: 'las la-equals',
		codes: [
			{
				key: '1',
				title: 'normal',
				code: `
const pipe = (...fns) => (arg) => fns.reduce((v, fn) => fn(v), arg)
    `,
				usage: `
const addTwo = (x) => x + 2;
const double = (x) => x * 2;
const square = (x) => x * x;
const fn = pipe(addTwo, double, square);

fn(1);
// square(double(addTwo(1)))
// 36
    `,
			},
			{
				key: '2',
				title: 'reverse',
				code: `
const compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)))
    `,
				usage: `
const addTwo = (x) => x + 2;
const double = (x) => x * 2;
const square = (x) => x * x;
const fn = compose(addTwo, double, square);

fn(1);
// addTwo(double(square(1)))
// 4
    `,
			},
		],
	},
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.FUNCTION,
		title: 'Debounce',
		icon: 'las la-sync',
		codes: [
			{
				key: '1',
				code: `
const debounce = (callback, milliseconds) => {
	let timeout

	return (argument) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => callback(argument), milliseconds)
	}
}
`,
				usage: `
const debouncedFn = debounce(Fn, 500)
`,
			},
		],
		description: `
Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called.  
For example, “execute this function only if 500 milliseconds have passed without it being called.
`,
	},
];
