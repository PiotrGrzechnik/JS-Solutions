import {Category, JSType, Solution} from "src/types";

export const basic: Solution[] = [
{
    category: Category.JAVASCRIPT,
    subcategory: JSType.ARRAY,
    title: "Remove duplicates from an array",
    description: " ",
    codes: [
    {
    key: '1',
    code:
    `
    const removeDuplicatesFromArray = (arr) => arr.filter((item, index) => arr.indexOf(item) === index)

    const arr = ['one','two','one']

    removeDuplicatesFromArray(arr)

    // ['one','two']
    `
    },{
    key: '2',
    code:
    `
    const arr = ['one','two','one']

    const removeDuplicatesFromArray = [...new Set(arr)]

    // ['one','two']
    `
    }
    ],
    tags: [JSType.ARRAY]
}
];
