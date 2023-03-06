import { BaseCrudProxy } from "./base-crud.proxy";
import { ProjectProxy } from "./project.proxy";

export interface TagProxy extends BaseCrudProxy {
    name: string;
    backgroundColor: string;
}
