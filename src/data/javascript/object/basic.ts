import { Category, JSSubcategory, Solution } from 'src/types';

export const basic: Solution[] = [
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.OBJECT,
		title: 'Copy of object',
		codes: [
			{
				key: '1',
				title: 'shallow',
				code: `
// Spread operator
const newObj = { ...obj }

// Object.assign() method
const newObj = Object.assign({}, obj);
      `,
				usage: `
const obj = {
  a: 1,
  b: '2'
}

const newObj = { ...obj }
// or
const newObj = Object.assign({}, obj);

// const newObj = {
//  a: 1,
//  b: '2'
// }

      `,
			},
			{
				key: '2',
				title: 'deep',
				code: `
const deepCopy = (param) => {
  let copyResult
  let value

  if (typeof param !== "object" || param === null) {
    return param
  }

  copyResult = Array.isArray(param) ? [] : {}

  for (const key in param) {
    value = param[key]

    copyResult[key] = deepCopy(value)
  }

  return copyResult
}
      `,
				usage: `
const originalObj = {
  hello: {
    word: "word"
  }
}

const copiedObj = deepCopy(originalObj)
copiedObj.hello.word = 'excel'

// originalObj:
// const originalObj = {
//   hello: {
//     word: "world"
//   }
// }

// copiedObj:
// const copiedObj = {
//   hello: {
//     word: "excel"
//   }
// }

      `,
			},
		],
	},
];
