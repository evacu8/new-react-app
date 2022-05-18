import styles from './SearchForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { updateSearchstring } from '../../redux/store';

const SearchForm = () => {

  const dispatch = useDispatch();
  
  const [searchString, setSearchString] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchstring(searchString));
    setSearchString('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit} >
      <TextInput placeholder="Search..." value={searchString} onChange={(e) => setSearchString(e.target.value.toString())} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;