import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';

import { getFavorites } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Favorite = () => {
  const favoriteCards = useSelector(state => getFavorites(state));

  if (favoriteCards.length === 0) return <Navigate to='/' />;

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((card) => (
            <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} columnId={card.columnId} />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;