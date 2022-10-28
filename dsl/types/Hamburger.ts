import { Bread, Ingredient } from "./Ingredient"

export type Hamburger = {
	name:string,
	bread : Bread,
	ingredients : Ingredient[]
}