//
// DSL Frontend REACT
//

type Ingredient = Sauce | Cheese | Salad | Tomato | Onion | Andouille | Butter

type Bread = {
	name : 'wheat' | 'buckWheat' | 'corn',
	sauceOnUpperBread : Butter | Sauce | Oil,
	sauceOnLowerBread : Butter | Sauce | Oil,
}

type Hamburger = {
	name:string,
	bread : Bread,
	ingredients : Ingredient[]
}

const jsonResponse = {
	 name:'custom-burger', 
	 bread:'bread:wheat', 
	 ingredients: ['sauce::']
}

const Hamburger = (burger:Hamburger):JSX.Element =>(
  <Hamburger name={burger.name}>
		<Bread type={ingredients.bread}>
			<Sauce type={ingredients.sauce}/>
			<Cheese type={ingredients.cheese}>
			<Andouille/>
			<Onion/>
			<Salad type={ingredients.salad}/>
			<Butter quantity:number withSalt:boolean/>
		</BuckwheatBread>
  </Hamburger>
)

const BreizhBurger : JSX.Element = (
  <Hamburger>
		<Bread type={buckWheat}>
			<Sauce type={cheesy}/>
			<Cheese type={tommeDeTimadeuc}>
			<Andouille/>
			<Onions/>
			<Salad type={roquette}/>
			<Butter quantity:number withSalt:boolean/>
		</BuckwheatBread>
  </Hamburger>
)


//
// DSL Backend
//

export type Burger = Record<string,unknown>

export type Ingredient = Andouille | Salad | Cheese | Sauce | Bread

export type Action = Add | Heat | Season | Slice;

export class Add {
  readonly _tag = "Add";
  constructor(readonly left: Ingredients, readonly right: Burger) {}
}

export function add(right: Burger) {
  return (left: Ingredient): Burger => new Add(left, right);
}

export class Heat {
  readonly _tag = "Heat";
  constructor(readonly left: Ingredient) {}
}

export function heat(right: Expr) {
  return (left: Ingredient): Ingredient => new Heat(left, right);
}

export class Season {
  readonly _tag = "Season";
  constructor(left: Ingredient,right: Ingredient) {}
}

export function season(right: Expr) {
  return (left: Ingredient): Ingredient => new Season(left, right);
}

export class Slice {
  readonly _tag = "Slice";
  constructor(readonly left: Ingredient, right: Ingredient) {}
}

export function slice(right: Ingredient) {
  return (left: Ingredient): Ingredient => new Slice(left, right);
}

// //
// // Usage
// //

// export const burger = pipe(
//   add(bread:Bread),
//   slice(tomate:Tomate),
//   add(tomate:Tomate),
// );