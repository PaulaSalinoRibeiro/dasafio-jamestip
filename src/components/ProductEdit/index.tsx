import {ChangeEvent, MouseEvent} from 'react';
import { useProducts } from '../../context/ProductsProvider'

import {Container} from './styles'

interface IProducts {
  code: string;
  category: string;
  name_product: string;
  name_provider: string;
  price: string;
}

export const ProductEdit = () => {
  const {setIsModalEdit, productEdit, setProductEdit, product} = useProducts();

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
    setProductEdit({...productEdit, [name]: value});
  }

  const handleSubmit = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    product
    .forEach(item => {
      if (item.code === productEdit.code) {
         Object.assign(item, productEdit)
      }
    });
    setIsModalEdit(false);

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
              disabled
              onChange={handleChange}
              value={productEdit.code} 
            />
          </label>
          <label htmlFor="category">
            Categoria do produto:
            <input 
              id="category" 
              type="text" 
              name="category" 
              onChange={handleChange} 
              value={productEdit.category} 
            />
          </label>
          <label htmlFor="name_product">
            Nome do produto:
            <input 
              id="name_product"
              type="text" 
              name="name_product" 
              onChange={handleChange} 
              value={productEdit.name_product} 
            />
          </label>
          <label htmlFor="name_provider">
            Nome do fornecedor:
            <input 
              id="name_provider" 
              type="text" 
              name="name_provider" 
              onChange={handleChange} 
              value={productEdit.name_provider} 
            />
          </label>
          <label htmlFor="price">
            Preço:
            <input 
              id="price" 
              type="text" 
              name="price" 
              onChange={handleChange} 
              value={productEdit.price} 
            />
          </label>
          <button
            type="submit"
            onClick={handleSubmit}
          >
            Salvar
          </button>
        </form>
      </Container>
    </>
  )
}