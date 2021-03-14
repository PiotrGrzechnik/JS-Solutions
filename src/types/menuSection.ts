import { Category, Subcategory } from './';

export interface MenuSection {
	category: Category;
	icon: string;
	subcategories: Subcategory[];
}
