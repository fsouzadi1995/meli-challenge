import * as React from 'react';

import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Status } from './constants/status.constants';
import { Product } from './models/product.model';
import { ProductResult } from './pages/home/ProductResult/ProductResult';
import { ProductSearch } from './pages/home/ProductSearch/ProductSearch';
import { getProductById } from './services/product.api';

interface State {
  status: Status;
  searchTerm: string;
  result?: Product;
  error?: Error;
}

export const App = (): JSX.Element => {
  const [{ status, searchTerm, error, result }, setState] = React.useState<State>({
    status: Status.Idle,
    searchTerm: 'MLA8339779',
  });

  React.useEffect(() => {
    if (!searchTerm) {
      return;
    }

    setState(() => ({ status: Status.Pending, searchTerm }));

    getProductById(searchTerm)
      .then((result) => setState((s) => ({ ...s, status: Status.Resolved, result })))
      .catch((error) => setState((s) => ({ ...s, status: Status.Rejected, error })));
  }, [searchTerm]);

  function handleOnSubmit(searchTerm: string): void {
    setState((s) => ({ ...s, searchTerm }));
  }

  return (
    <>
      <Header />
      <main>
        <Card>
          <ProductSearch initialValue={searchTerm} onSubmit={handleOnSubmit} />

          {status === Status.Pending ? (
            <div>Loading...</div>
          ) : status === Status.Resolved ? (
            <ProductResult product={result} />
          ) : status === Status.Rejected ? (
            <h1 style={{ color: 'darkred' }}>{error?.message}</h1>
          ) : null}
        </Card>
      </main>
    </>
  );
};
