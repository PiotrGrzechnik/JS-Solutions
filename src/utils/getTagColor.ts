import {JSType} from 'src/types';

export const getTagColor = (type: JSType): string => {
	switch (type) {
		case JSType.ARRAY:
			return 'blue';
		case JSType.OBJECT:
			return 'magenta';
		case JSType.STRING:
			return 'orange';
		case JSType.FUNCTION:
			return 'cyan';
		case JSType.NUMBER:
			return 'geekblue';
		case JSType.NULL:
			return 'lime';
		case JSType.BOOLEAN:
			return 'purple';
		case JSType.UNDEFINED:
			return 'default';
	}
};
