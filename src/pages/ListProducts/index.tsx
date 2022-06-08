import {useEffect, useState} from 'react';
import { CardProduct } from '../../components/CardProduct';
import { Header } from "../../components/Header"
import { Container } from './styles';

interface Item {
  code: string,
  category: string,
  name_product: string,
  name_provider: string,
  price: string,
}

export const ListProducts = () => {
  const keyLocalStorage = '@jamesTip:registrations';
  
  const [existProduct, setExistProduct] = useState(false);
  const [list, setList] = useState<Item[]>([]);
  
  useEffect(() => {
    const products = localStorage.getItem(keyLocalStorage);
    if (products) {
      const producstList = JSON.parse(products);
      setList(producstList);
      setExistProduct(true);
    } 
  }, [])

  useEffect(() => {
    if(list.length === 0) {
      setExistProduct(false)
    } else {
      setExistProduct(true)
    }
  }, [list])

  return (
    <>
      <Header/>
      <Container>
      {
        existProduct
        ? list.map(item => (
            <CardProduct 
              key={item.code} 
              code={item.code} 
              category={item.category} 
              name_product={item.name_product}
              name_provider={item.name_provider}
              price={item.price}
            />))
        : <h2>Nenhum produto resgistrado!</h2>
      }
      </Container>
    </>
  )
}