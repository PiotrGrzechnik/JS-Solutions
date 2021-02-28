import { Category, ReactType, Solution } from 'src/types';

export const basic: Solution[] = [
	{
		category: Category.REACT,
		subcategory: ReactType.HOOKS,
		title: 'Check if component is mounted',
		codes: [
			{
				key: '1',
				code: `
const useIsMountedRef = () => {
	const isMounted = useRef(false);

	useEffect(() => {
		isMounted.current = true;

		return () => {
			isMounted.current = false;
		};
	}, []);

	return isMounted;
}
      `,
				example: `
// In component:

const isMounted = useIsMountedRef();

...

if (isMounted.current) {
	// do stuff
}
      `,
			},
		],
	},
];
