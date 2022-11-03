import { right } from "@effect-ts/core/Either";
import { BurgerRepository } from "../core/ports/secondary_adapters";
import { fakeJSONResponse } from "./dto";
import { jsonBurgerDomainAdapter } from "./dto/types/jsonBurgerDomainAdaper";

export const makeBurgerRepository = ():BurgerRepository=>({
    getBurger:(name)=>{
        return Promise.resolve(right(jsonBurgerDomainAdapter.toDomain(fakeJSONResponse)))
    }
})