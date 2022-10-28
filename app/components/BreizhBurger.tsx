import { Andouille, Onion ,Hamburger, Bread, Cheese, Salad} from '../../dsl'


export const BreizhBurger  = ():JSX.Element => (
  <Hamburger>
		<Bread bread={{name : 'wheat',sauceOnLowerBread:'butter',sauceOnUpperBread:'butter'}}>
			<Cheese cheese='raclette'/>
      <Andouille/>
      <Onion/>
			<Salad salad='roquette'/>
		</Bread>
  </Hamburger>
)
