import {Category, JSType, Solution} from 'src/types';

export const basic: Solution[] = [
{
  category: Category.JAVASCRIPT,
  subcategory: JSType.ARRAY,
  title: 'Remove duplicates from an array',
  codes: [
    {
    key: '1',
    title: 'filter',
    code:
    `
    const removeDuplicatesFromArray = (arr) => arr.filter((item, index) => arr.indexOf(item) === index)
    `,
    example:
    `
    const arr = ['one','two','one']

    removeDuplicatesFromArray(arr)

    // ['one','two']
    `
    },{
    key: '2',
    title: 'Set',
    code:
    `
    const removeDuplicatesFromArray = [...new Set(arr)]
    `,
    example:
    `
    const arr = ['one','two','one']

    removeDuplicatesFromArray = [...new Set(arr)]

    // ['one','two']
    `
    },{
    key: '3',
    title: 'classic',
    code:
    `
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
    example:
    `
    const arr = ['one','two','one']

    removeDuplicatesFromArray(arr)

    // ['one','two']
    `
    }
  ],
},
{
  category: Category.JAVASCRIPT,
  subcategory: JSType.ARRAY,
  title: 'Count element occurrences in an array',
  codes: [
    {
    key: '1',
    title: 'reduce',
    code:
    `
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
    `,
    example:
    `
    const arr = [1, 1, 2, 1, 2, 3]
    
    countOccurrences(arr, 1)

    // 3
    `
    }],
}
];
