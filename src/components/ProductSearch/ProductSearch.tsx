import { Button } from '../Button';
import { Searchbar } from '../Searchbar';

import styles from './ProductSearch.module.scss';

interface Props {
  name: string;
  label: string;
  value: string;
  isDisabled?: boolean;
  onChange: (val: string) => void;
  onSubmit: (evt: React.FormEvent) => void;
}

export const ProductSearch = ({ name, label, value, isDisabled, onChange, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <Searchbar label={label} name={name} value={value} onInputChange={onChange} />
      <Button
        colorScheme='primary'
        disabled={isDisabled}
        text='Buscar'
        type='submit'
        onClick={onSubmit}
      />
    </form>
  );
};
