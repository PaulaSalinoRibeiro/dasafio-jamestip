import { CardProduct } from '../../components/CardProduct';
import { Header } from "../../components/Header"
import { useProducts } from '../../context/ProductsProvider';
import {ProductEdit} from '../../components/ProductEdit'

import { Container } from './styles';

export const ListProducts = () => {
  const {product, existProduct, isModalEdit} = useProducts();

  return (
    <>
      {
        isModalEdit 
        ? <ProductEdit />
        : (
          <>
            <Header/>
            <Container>
            {
              existProduct
              ? product.map(item => (
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
    </>
  )
}