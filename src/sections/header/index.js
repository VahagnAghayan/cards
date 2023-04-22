import './header.scss';

const Header = ({addCard, sortCards, deleteAllCards}) => (
  <header className="header">
    <button onClick={addCard}>Add Card</button>
    <button onClick={sortCards}>Sort Cards</button>
    <button onClick={deleteAllCards}>Clear All</button>
  </header>
)

export default Header;
