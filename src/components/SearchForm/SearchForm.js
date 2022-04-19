import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  return (
    <form className={styles.SearchForm}>
      <TextInput placeholder="Search..." />
      <Button text="Search"/>
    </form>
  );
};

export default SearchForm;