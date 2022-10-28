export type Ingredient = Sauce | Cheese | Salad | Tomato | Onion | Andouille | Butter

export type Cheese = 'camembert' | 'comte' | 'mozzarella' | 'raclette'
export type Salad = 'roquette' | 'laitue'
export type Tomato = 'tomato'
export type Onion = 'onion'
export type Andouille = 'andouille'

export type Bread = {
	name : 'wheat' | 'buckWheat' | 'corn',
	sauceOnUpperBread : Butter | Sauce | Oil,
	sauceOnLowerBread : Butter | Sauce | Oil,
}

export type Sauce = 'cheesy' | 'onion' | 'ketchup' | 'samouraï'
export type Butter = 'butter'
export type Oil = 'oil'
