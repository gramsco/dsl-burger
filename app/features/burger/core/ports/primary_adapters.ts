import { Either } from "@effect-ts/core/Either"
import { BurgerError, BurgerSpecification } from "../domain/types"

export interface BurgerService {
    getBurger : (name:string)=>Promise<Either<BurgerError,BurgerSpecification>>
}