import {Category} from "./category";
import {Subcategory} from "./subcategory";

export interface SolutionCode {
    key: string;
    code: string;
}

export interface Solution {
    category: Category;
    subcategory: Subcategory;
    title: string;
    description: string;
    codes: SolutionCode[];
    tags: Subcategory[];
}
