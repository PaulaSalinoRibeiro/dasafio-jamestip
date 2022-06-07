import {ProductsContext} from './ProductsContext';
import React, {useState, ReactNode, useContext} from 'react';

interface Props {
  code: string,
  category: string,
  name_product: string,
  name_provider: string,
  price: string,
}

export const ProductsProvider = ({children}: ReactNode) => {
  const [product, setProduct] = useState<Props[]>([]);
  const data = {
    product,
    setProduct
  }

  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => useContext(ProductsContext);