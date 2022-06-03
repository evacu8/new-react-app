import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const handleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    dispatch(toggleCardFavorite(props.id));
  }
  
  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  }

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button 
          type='button'
          className={clsx(styles.button, isFavorite && styles.favorite)} 
          onClick={handleFavorite}>
          <span className="fa fa-star-o" />
        </button>
        <button 
          type='button'
          className={styles.button} 
          onClick={handleRemove}>
          <span className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
};

export default Card;