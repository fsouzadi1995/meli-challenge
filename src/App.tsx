import React, { useEffect, useState } from 'react';

import { Card } from './components/Card';
import { Header } from './components/Header';
import { Product } from './models';

const App: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  // const [product, setProduct] = useState<Product>();
  function handleChange(value: string) {
    const val = value.trim();

    setSearch(val);
  }

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();

    console.warn({ search });

    setSearch('');
  }

  return (
    <>
      <Header />
      <Card
        isDisabled={!search.length}
        value={search}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <pre>{search}</pre>
    </>
  );
};

export default App;
