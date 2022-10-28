export type Ingredient = Sauce | Cheese | Salad | Tomato | Onion | Andouille | Butter

export type Cheese = 'camembert' | 'comte' | 'mozzarella' | 'raclette'
export type Salad = 'roquette' | 'laitue'
export type Tomato = 'tomato'
export type Onion = 'onion'
export type Andouille = 'andouille'

export type Bread = {
	name : 'wheat' | 'buckWheat' | 'corn',
	sauceOnUpperBread : Butter | Sauce | Oil | Empty,
	sauceOnLowerBread : Butter | Sauce | Oil | Empty,
}

type Sauce = 'cheesy' | 'onion' | 'ketchup' | 'samouraï'
type Butter = 'butter'
type Oil = 'oil'
type Empty = 'empty'
