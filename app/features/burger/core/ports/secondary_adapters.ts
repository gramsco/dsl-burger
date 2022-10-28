import { Either } from "@effect-ts/core/Either"
import { BurgerError, BurgerSpecification } from "../domain/types"

export interface BurgerRepository {
    getBurger : (name:string)=>Promise<Either<BurgerError,BurgerSpecification>>
}