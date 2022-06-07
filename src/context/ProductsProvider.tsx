import {ProductsContext} from './ProductsContext';
import {useState, useContext, ReactNode} from 'react';

interface IProducts {
  code: string,
  category: string,
  name_product: string,
  name_provider: string,
  price: string,
}

interface Props {
  children: ReactNode,
}

export const ProductsProvider = ({children}: Props) => {
  const [product, setProduct] = useState<IProducts[]>([]);
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