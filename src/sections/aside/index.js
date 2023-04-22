import './aside.scss';

const paragraphs = [
  'Press tha "add card" button to add the new card',
  'Use the "sort Cards" button to sort the cards by the increase',
  'Press an X icon on the top right to delete them'
]

const Aside = () => (
  <aside className="aside">
    {
      paragraphs.map(text => <p key={text}>{text}</p>)
    }
  </aside>
)

export default Aside;
