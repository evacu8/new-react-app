import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {

  const strContains = (targetString, str) => targetString.toLowerCase().includes(str.toLowerCase());
  
  const searchString = useSelector(state => state.searchString.toString())
  const cards = useSelector(state => 

    state.cards.filter(card => (card.columnId === props.id && strContains(card.title, searchString)))
  );
  
  return (
  <article className={styles.column}>
    <h2 className={styles.title}>
      <span className={styles.icon + ' fa fa-' + props.icon} />
      {props.title}
    </h2>
    <ul className={styles.cards}>
      {cards.map(card => <Card key={card.id} title={card.title} />)}
    </ul>
    <CardForm columnId={props.id} />
  </article>
  );
};

export default Column;