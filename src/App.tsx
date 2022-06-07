import React from 'react';
import {ProductsProvider} from './context/ProductsProvider';
import {Routes} from './routes/Routes';

function App() {
  return (
    <ProductsProvider>
      <Routes />
    </ProductsProvider>
  );
}

export default App;
