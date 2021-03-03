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

// const originalObj = {
//   hello: {
//     word: "word"
//   }
// }

// const copiedObj = {
//   hello: {
//     word: "excel"
//   }
// }

      `,
			},
		],
	},
	{
		category: Category.JAVASCRIPT,
		subcategory: JSSubcategory.OBJECT,
		title: 'Get array of objects in order, based on property from another list',
		codes: [
			{
				key: '1',
				title: 'reduce',
				code: `
const getListOfObjects = (list, listOfObjects, key) =>
  list.reduce((acc, item) => {
    const foundItem = listOfObjects.find(obj => obj[key] === item)

    if (foundItem) {
      return [...acc, foundItem]
    }

    return acc
}, [])
      `,
				usage: `
const list = [1, 2, 3]
const listOfObjects = [
  { id: 2 },
  { id: 1 },
  { id: 3 },
  { id: 4 }
]
const key = 'id'

const result = getListOfObjects(list, listOfObjects, key)

// const result = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
// ]
      `,
			},
		],
	},
];
