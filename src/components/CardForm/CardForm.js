import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = props => {

  const [title, setTitle] = useState('');
  const columnId = props.columnId;

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({ title, columnId }));
    setTitle('');
  };

  return (
  <form onSubmit={handleSubmit} className={styles.cardForm}>
    <span>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
    <Button>
      Add Card
    </Button>
  </form>
  );
};

export default CardForm;