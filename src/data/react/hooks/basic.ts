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
				usage: `
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
	{
		category: Category.REACT,
		subcategory: ReactType.HOOKS,
		title: 'Keep previous value',
		icon: 'las la-undo-alt',
		codes: [
			{
				key: '1',
				code: `
const usePrevious = (value) => {
	const ref = React.useRef()

	React.useEffect(() => {
		ref.current = value
	})

	return ref.current
}
      `,
				usage: `
// In component:

const lastValue = usePrevious(value)
      `,
			},
		],
	},
	{
		category: Category.REACT,
		subcategory: ReactType.HOOKS,
		title: 'Mouse position hook',
		icon: 'las la-mouse-pointer',
		codes: [
			{
				key: '1',
				code: `
const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({})

	useEffect(() => {
		const getMousePosition = e => {
			const posX = e.clientX
			const posY = e.clientY
			setMousePosition({ posX, posY })
		}

		document.addEventListener("mousemove", getMousePosition)

		return function cleanup() {
			document.removeEventListener("mousemove", getMousePosition)
		}
	})

	return mousePosition
}
      `,
				usage: `
// In component:

const { posX, posY } = useMousePosition()

      `,
			},
		],
	},
	{
		category: Category.REACT,
		subcategory: ReactType.HOOKS,
		title: 'Window size hook',
		icon: 'las la-expand-arrows-alt',
		codes: [
			{
				key: '1',
				code: `
const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	})

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}
		
		window.addEventListener("resize", handleResize)
		
		handleResize()
		
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return windowSize
}
      `,
				usage: `
// In component:

const size = useWindowSize()

      `,
			},
		],
	},
];
