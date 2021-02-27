import { Category } from './category';
import { Subcategory } from './subcategory';

export interface SolutionCode {
	key: string;
	code: string;
	title?: string;
	example?: string;
}

export interface Solution {
	category: Category;
	subcategory: Subcategory;
	title: string;
	description?: string;
	tags?: Subcategory[];
	codes: SolutionCode[];
}
