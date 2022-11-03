import { BurgerRepository } from "../../ports/secondary_adapters";

export const makeBurgerService = (burgerRepository:BurgerRepository)=>{
    getBurger:burgerRepository.getBurger
}