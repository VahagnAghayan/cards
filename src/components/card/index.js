import { memo } from 'react';

import './card.scss';

const Card = ({number, index, deleteCard}) => (
  <div className='card'>
    <span className='delete_icon' onClick={() => deleteCard(index, number)}>&#x2715;</span>
    <h1>{number}</h1>
  </div>    
)


export default memo(Card);
