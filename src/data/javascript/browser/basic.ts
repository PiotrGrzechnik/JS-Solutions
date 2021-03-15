import { Category, JSSubcategory, Solution } from 'src/types';

export const basic: Solution[] = [
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.BROWSER,
		title: 'Get scroll position of the current page',
		icon: 'las la-arrows-alt',
		codes: [
			{
				key: '1',
				code: `
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
      `,
				usage: `
getScrollPosition();
// {x: 0, y: 200}

const element = document.getElementById('element');
getScrollPosition(element);
// {x: 30, y: 40}
      `,
			},
		],
	},
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.BROWSER,
		title: 'Intersection Observer - observe visibility change of an element in the viewport',
		icon: 'las la-eye',
		description: `
### Documentation:
- [MDN IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)	
- [MDN IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)	


### Real examples:
- [Example 1](https://codepen.io/SimonEvans/pen/Qqjxde)

		`,
		codes: [
			{
				key: '1',
				title: 'Overview',
				code: `
const observer = new IntersectionObserver(changes => {
	for (const change of changes) {
		console.log(change.time);               // Timestamp when the change occurred
		console.log(change.rootBounds);         // Unclipped area of root
		console.log(change.boundingClientRect); // target.boundingClientRect()
		console.log(change.intersectionRect);   // boundingClientRect, clipped by its containing block ancestors, and intersected with rootBounds
		console.log(change.intersectionRatio);  // Ratio of intersectionRect area to boundingClientRect area
		console.log(change.isIntersecting);     // true - is in view / false = isn't in view
		console.log(change.target);             // the Element target
	}
}, {});
      `,
				usage: `
// Watch for intersection events on a specific target Element.

const target = document.getElementById('target')

observer.observe(target);
      `,
			},
			{
				key: '2',
				title: 'Simple',
				code: `
const observer = new IntersectionObserver(elements => {
	if (elements[0].intersectionRatio !== 0) {
		console.log("The element is in view!");
	} else {
		console.log("The element is out of view")
	}
})
      `,
				usage: `
const target = document.getElementById('target');

observer.observe(target);
      `,
			},
		],
	},
];
