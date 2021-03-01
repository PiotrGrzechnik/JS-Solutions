export enum JSSubcategory {
	ARRAY = 'array',
	OBJECT = 'object',
	FUNCTION = 'function',
	STRING = 'string',
	NUMBER = 'number',
	BROWSER = 'browser',
}

export enum ReactType {
	HOOKS = 'hooks',
}

export type Subcategory = JSSubcategory | ReactType;
