import { Bread, Hamburger } from "../../../../../dsl"
import { Burger } from "../types/Burger"

export const ReactComponenBurgerGenerator = (burger:Burger):JSX.Element => {

    return <Hamburger name={burger.name}>
        <Bread bread={burger.bread}>

        </Bread>
    </Hamburger>
}