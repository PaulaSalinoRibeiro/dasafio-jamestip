
import { useProducts } from '../../context/ProductsProvider'
import {Container} from './styles'

export const ProductEdit = () => {
  const {setIsModalEdit, productEdit} = useProducts();

  const handleClick = () => {
    setIsModalEdit(false)
  }
  return (
    <>
      <Container>

      <form>
          <label htmlFor="code">
            Código do produto:
            <input 
              id="code"
              type="text" 
              name="code" 
              value={productEdit.code} 
              // onChange={}
            />
          </label>
          <label htmlFor="category">
            Categoria do produto:
            <input 
              id="category" 
              type="text" 
              name="category" 
              value={productEdit.category} 
              // onChange={} 
            />
          </label>
          <label htmlFor="name_product">
            Nome do produto:
            <input 
              id="name_product"
              type="text" 
              name="name_product" 
              value={productEdit.name_product} 
              // onChange={} 
            />
          </label>
          <label htmlFor="name_provider">
            Nome do fornecedor:
            <input 
              id="name_provider" 
              type="text" 
              name="name_provider" 
              value={productEdit.name_provider} 
              // onChange={} 
            />
          </label>
          <label htmlFor="price">
            Preço:
            <input 
              id="price" 
              type="text" 
              name="price" 
              value={productEdit.price} 
              // onChange={} 
            />
          </label>
          <button
            type="submit"
            // onClick={}
          >
            Enviar
          </button>
        </form>
      </Container>
    </>
  )
}