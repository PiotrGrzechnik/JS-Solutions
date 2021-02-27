export enum JSType {
	ARRAY = 'array',
	OBJECT = 'object',
	FUNCTION = 'function',
	STRING = 'string',
	NUMBER = 'number',
	BOOLEAN = 'boolean',
	NULL = 'null',
	UNDEFINED = 'undefined',
}

export enum ReactType {
	HOOKS = 'hooks',
}

export type Subcategory = JSType | ReactType;
