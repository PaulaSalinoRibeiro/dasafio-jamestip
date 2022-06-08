
import { useProducts } from '../../context/ProductsProvider'
import {Container} from './styles'

interface Props {
  code: string,
  category: string,
  name_product: string,
  name_provider: string,
  price: string,
}

export const CardProduct = ({
  code, category, name_product, name_provider, price
} : Props) => {
  
  const {product, setProduct} = useProducts();

  const handleEditItem = () => {}

  const handleRemoveItem = (code: string) => {
    const newProductList = product.filter(item => item.code !== code);
    setProduct(newProductList);
  }
  
  return (
    <Container key={code}>
      <p>{`Código: ${code}`}</p>
      <p>{`Categoria: ${category}`}</p>
      <p>{`Nome: ${name_product}`}</p>
      <p>{`Fornecedor: ${name_provider}`}</p>
      <p>{`Preço: ${price}`}</p>
      <button
        type="button"
        onClick={() => handleRemoveItem(code)}
      >
        Delete
      </button>
      <button
        type="button"
        onClick={handleEditItem}
      >
        Edit
      </button>
    </Container>
  )
}