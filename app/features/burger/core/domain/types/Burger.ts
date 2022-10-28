export type Ingredient = {
    name:'a'|'b'|'c'|'d',
    // quantity:number,
}

export type BurgerError = {_tag:'BurgerError'}

export type Bread = {
    name:'wheat'|'corn'|'black',
    sauceOnUpperBread:'butter'|'sauce'|'oil',
    sauceOnLowerBread:'butter'|'sauce'|'oil'
}

export type BurgerSpecification = {
    name:string, 
    bread:Bread, 
    ingredients: Array<Ingredient>
}