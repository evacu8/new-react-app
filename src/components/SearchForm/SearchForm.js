import styles from './SearchForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString, updateSearchstring } from '../../redux/store';

const SearchForm = () => {

  const dispatch = useDispatch();
  
  const actualSearchString = useSelector(getSearchString);

  const [searchString, setSearchString] = useState(actualSearchString);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchstring(searchString));
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