import { Category, JSSubcategory, Solution } from 'src/types';

export const basic: Solution[] = [
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.BROWSER,
		title: 'Get scroll position of the current page',
		codes: [
			{
				key: '1',
				code: `
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
      `,
				example: `
getScrollPosition();
// {x: 0, y: 200}

const element = document.getElementById('element');
getScrollPosition(element);
// {x: 30, y: 40}
      `,
			},
		],
	},
];
