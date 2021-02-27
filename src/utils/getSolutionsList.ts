import { ListPath, Solution } from 'src/types';

export const getSolutionsList = async (path: ListPath): Promise<Record<string, Solution[]>> => {
	const category = path[0];
	const subcategory = path[1];

	const list = await import(`../data/${category}/${subcategory}`).catch(() => ({
		solutions: [],
	}));
	return list;
};
