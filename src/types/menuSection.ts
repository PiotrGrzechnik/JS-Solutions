import { ReactElement } from 'react';
import { Category, Subcategory } from './';

export interface MenuSection {
	category: Category;
	icon: ReactElement;
	subcategories: Subcategory[];
}
