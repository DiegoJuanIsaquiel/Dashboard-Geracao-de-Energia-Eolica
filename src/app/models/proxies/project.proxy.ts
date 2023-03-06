import { CategoryEnum } from "../enum/category.enum";
import { BaseCrudProxy } from "./base-crud.proxy";
import { TagProxy } from "./tag.proxy";

export interface ProjectProxy extends BaseCrudProxy {
    name: string;
    description: string;
    imageUrl: string;
    category: CategoryEnum;

    tags?: TagProxy[];
}
