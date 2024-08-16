import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import styles from './Header.module.scss';

type Props = {
  setSearchString: (value: string) => void;
};

export const Header = ({ setSearchString }: Props) => {
  const [valueInput, setValueInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchString(valueInput);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <TextField
        value={valueInput}
        onChange={handleChange}
        placeholder="Введите поисковый запрос"
        variant="outlined"
        autoComplete="off"
        className={styles.textField}
        InputProps={{
          className: styles.input,
        }}
      />
      <Button variant="contained" className={styles.button} type="submit">
        Искать
      </Button>
    </form>
  );
};
