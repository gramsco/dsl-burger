import { DrivingDomainAdapter } from "../../../../../core";
import { ADAPTER_NOT_YET_IMPLEMENTED } from "../../../../../core/adapters";
import { BurgerSpecification } from "../../../core/domain";
import { Bread, Ingredient } from "../../../core/domain/types/Burger";
import { JsonApiBurger, JsonBread, JsonIngredient } from "./jsonApiBurger";

type ParsedJsonApiBread = {
    type:'wheat'|'corn'|'black',
    up:'butter'|'sauce'|'oil',
    down:'butter'|'sauce'|'oil'
}

const toBread = (parsedJsonBread:ParsedJsonApiBread):Bread=>({
    name:parsedJsonBread.type,
    sauceOnUpperBread:parsedJsonBread.up,
    sauceOnLowerBread:parsedJsonBread.down,
})

const breadParser = (jsonBread:JsonBread):Bread=>{
    return toBread(JSON.parse(jsonBread))
}

type ParsedJsonApiIngredient = 'onion'|'andouille'|'tomato'|'cuncumber' | {salad:string} | {cheese:string}

const toIngredient = (parsedJsonIngredient:ParsedJsonApiIngredient):Ingredient=>{
    return parsedJsonIngredient[0]?{name:parsedJsonIngredient} : 
    {name:parsedJsonIngredient[0],}
}

const ingredientParser = (jsonIngredient:JsonIngredient):Ingredient=>{
    return toIngredient(JSON.parse(jsonIngredient))
}

export const jsonBurgerDomainAdapter : DrivingDomainAdapter<{domain:BurgerSpecification,driving:JsonApiBurger}> = {
    toDomain:(jsonApiBurger)=>({
        name:jsonApiBurger.name,
        bread:breadParser(jsonApiBurger.bread),
        ingredients:jsonApiBurger.ingredients.map(ingredientParser),
    }),
    // @ts-expect-error - we know what we are doing
    toDriving:ADAPTER_NOT_YET_IMPLEMENTED,
}