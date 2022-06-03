import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {

  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    dispatch(toggleCardFavorite(props.id));
  }

  return (
    <li className={styles.card}>
      {props.title}
      <button 
        type='button'
        className={clsx(styles.button, isFavorite && styles.favorite)} 
        onClick={handleClick}>
        <span className="fa fa-star-o" />
      </button>
    </li>
  );
};

export default Card;