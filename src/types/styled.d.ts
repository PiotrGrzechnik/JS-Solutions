import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			primaryDark: string;
			primaryLight: string;
			white: string;
			black: string;
			grey: string;
			lightGrey: string;
		};
	}
}
