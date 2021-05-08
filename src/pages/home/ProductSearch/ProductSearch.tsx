import * as React from 'react';

import { Button } from '../../../components/Button/Button';
import { TextInput } from '../../../components/TextInput/TextInput';

import styles from './ProductSearch.module.css';

interface Props {
  initialValue: string;
  onSubmit: (val: string) => void;
}

interface FormElements extends HTMLFormControlsCollection {
  product: HTMLInputElement;
}

interface SearchFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export const ProductSearch = ({ onSubmit, initialValue }: Props): JSX.Element => {
  const [search, setSearch] = React.useState<string>(initialValue);

  function handleOnSubmit(evt: React.FormEvent<SearchFormElement>): void {
    evt.preventDefault();
    onSubmit(evt.currentTarget.elements.product.value);
  }

  function handleOnChange({ currentTarget }: React.ChangeEvent<HTMLInputElement>): void {
    setSearch(currentTarget.value);
  }

  function handleOnClear(): void {
    setSearch('');
  }

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <label htmlFor='product'>Indicá el id del producto</label>
      <div>
        <TextInput
          clearFn={handleOnClear}
          id='product'
          placeholder='Ej.: MLA8339779'
          value={search}
          onChange={handleOnChange}
        />
        <Button color='primary' disabled={search === ''} text='Buscar' typeof='submit' />
      </div>
    </form>
  );
};
