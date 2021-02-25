import {Category, JSType, Solution} from "src/types";

export const basic: Solution[] = [
{
  category: Category.JAVASCRIPT,
  subcategory: JSType.FUNCTION,
  title: "Pipe (function composition)",
  description: " ",
  codes: [
    {
    key: '1',
    title: 'normal',
    code:
    `
    const pipe = (...fns) => (arg) => fns.reduce((v, fn) => fn(v), arg);
    `,
    example:
    `
    const addTwo = (x) => x + 2;
    const double = (x) => x * 2;
    const square = (x) => x * x;
    const fn = pipe(addTwo, double, square);
    
    fn(1);
    // square(double(addTwo(1)))
    // 36
    `
    },
    {
    key: '2',
    title: 'reverse',
    code:
    `
    const compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)));
    `,
    example:
    `
    const addTwo = (x) => x + 2;
    const double = (x) => x * 2;
    const square = (x) => x * x;
    const fn = compose(addTwo, double, square);

    fn(1);
    // addTwo(double(square(1)))
    // 4
    `
    }
  ],
  tags: [JSType.FUNCTION]
}
];
