import { JSSubcategory, Subcategory } from 'src/types';

export const getTagColor = (type: Subcategory): string => {
	switch (type) {
		case JSSubcategory.ARRAY:
			return 'blue';
		case JSSubcategory.OBJECT:
			return 'magenta';
		case JSSubcategory.STRING:
			return 'orange';
		case JSSubcategory.FUNCTION:
			return 'cyan';
		case JSSubcategory.NUMBER:
			return 'geekblue';
		case JSSubcategory.BROWSER:
			return 'lime';
		default:
			return 'default';
	}
};
