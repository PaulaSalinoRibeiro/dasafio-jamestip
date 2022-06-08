
import { useProducts } from '../../context/ProductsProvider'
import { deleteLocalStorage } from '../../utils/localStorage';
import {Container, Buttons} from './styles'

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
    deleteLocalStorage(code);
  }
  
  return (
    <Container key={code}>
      <span>Código:</span>
      <p>{code}</p>
      <span>Categoria:</span>
      <p>{category}</p>
      <span>Nome:</span>
      <p>{name_product}</p>
      <span>Fornecedor:</span>
      <p>{name_provider}</p>
      <span>Preço</span>
      <p>{price}</p>
      <Buttons>
        <button
          type="button"
          onClick={() => handleRemoveItem(code)}
        >
          Remover
        </button>
        <button
          type="button"
          onClick={handleEditItem}
        >
          Editar
        </button>
      </Buttons>
    </Container>
  )
}