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
  existProduct: boolean;
  isModalEdit: boolean;
  setIsModalEdit: (value: boolean) => void;
  productEdit: IProducts;
  setProductEdit: (value: IProducts) => void;
}

interface Props {
  children: ReactNode;
}

export const ProductsContext = createContext<IDataProps>({} as IDataProps);

export const ProductsProvider = ({children}: Props) => {
  const [product, setProduct] = useState<IProducts[]>([]);
  const [existProduct, setExistProduct] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [productEdit, setProductEdit] = useState<IProducts>({} as IProducts);

  const keyLocalStorage = '@jamesTip:registrations';

  useEffect(() => {
    const productsSaved = localStorage.getItem(keyLocalStorage);
    if(productsSaved) {
      setProduct(JSON.parse(productsSaved));
    }
  }, [])

  useEffect(() => {
    if(product?.length !== 0) {
      setExistProduct(true);
    } else {
      setExistProduct(false);
    }
  }, [product]);

  const data: IDataProps = {
    product,
    setProduct,
    existProduct,
    isModalEdit,
    setIsModalEdit,
    productEdit,
    setProductEdit

  }

  return (
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = () => useContext(ProductsContext);