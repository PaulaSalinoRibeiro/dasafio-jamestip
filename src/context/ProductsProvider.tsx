import { createContext } from "react";
import {useState, ReactNode, useContext, useEffect} from 'react';

interface IProducts {
  code: string;
  category: string;
  name_product: string;
  name_provider: string;
  price: string;
}

interface IDataProps {
  product: IProducts[];
  setProduct: (value: IProducts[]) => void;
}

interface Props {
  children: ReactNode;
}

export const ProductsContext = createContext<IDataProps>({} as IDataProps);

export const ProductsProvider = ({children}: Props) => {
  const [product, setProduct] = useState<IProducts[]>([]);

  useEffect(() => console.log(product), [product])

  const data: IDataProps = {
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