import { ProductResult } from '../ProductResult/ProductResult';
import { ProductSearch } from '../ProductSearch/ProductSearch';

interface Props {
  value: string;
  isDisabled: boolean;
  onSubmit: (evt: React.FormEvent) => void;
  onChange: (val: string) => void;
}

export const Card = (props: Props): JSX.Element => (
  <section>
    <article>
      <ProductSearch {...props} label='Indicá el id del producto' name='search-bar' />
    </article>
    <article>
      <ProductResult />
    </article>
  </section>
);
