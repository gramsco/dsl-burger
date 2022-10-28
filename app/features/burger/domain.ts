type Ingredient = {
    name:'a'|'b'|'c'|'d',
    quantity:number,
}

export type BurgerSpecification = {
        name:string, 
        bread:{type:string}, 
        ingredients: Array<Ingredient>
}