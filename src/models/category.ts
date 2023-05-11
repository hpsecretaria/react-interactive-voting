import { IPerson } from "./person";

export interface ICategory {
    name: string;
    nominees: IPerson[];
}