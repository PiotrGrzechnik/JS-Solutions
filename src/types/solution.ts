import {Category} from "./category";
import {Subcategories} from "./subcategory";

export interface SolutionType {
    category: Category;
    subcategory: Subcategories;
    title: string;
    description: string;
    code: string;
    example: string;
    tags: Subcategories[];
}
