import {Category} from "./category";
import {Subcategory} from "./subcategory";

export interface Solution {
    category: Category;
    subcategory: Subcategory;
    title: string;
    description: string;
    code: string;
    example: string;
    tags: Subcategory[];
}
