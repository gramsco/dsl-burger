import { DrivingDomainAdapter } from "../../../../core";
import { BurgerSpecification } from "../../core/domain";
import { Burger } from "../types/Burger";
import _identity from 'lodash/identity'

export const BurgerSpecificationBurgerAdapter : DrivingDomainAdapter<{domain:BurgerSpecification,driving:Burger}>={
    toDomain:_identity,
    toDriving:_identity
}