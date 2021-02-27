export const replaceTabWithSpaces = (str: string, spaces?: number): string => {
	const _spaces = ' '.repeat(spaces ?? 2);

	return str.replace(/\t/g, _spaces);
};
