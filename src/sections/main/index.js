import Card from '../../components/card';

import './main.scss';

const Main = ({cards, deleteCard}) => (
  <main className='main'>
    {
      cards.map((number, index) => <Card key={number} number={number} index={index} deleteCard={deleteCard} />) //key is a number in a card and its safe to use as a unique value because of duplicateChecker function in upper component
    }
  </main>
)

export default Main;
