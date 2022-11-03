export type JsonBread = `type:${'wheat'|'corn'|'black'};up:${'butter'|'sauce'|'oil'};down:${'butter'|'sauce'|'oil'}`
type IngredientCategory = 'cheese'|'salad'
type IngredientItem = 'onion'|'andouille'|'tomato'|'cuncumber'

export type JsonIngredient = `${IngredientItem}`|`${IngredientCategory}:${string}`

export type JsonApiBurger = {
    name:string, 
    bread:JsonBread, 
    ingredients: Array<JsonIngredient>
}