import {useState, ChangeEvent, MouseEvent } from 'react';
import {useProducts} from '../../context/ProductsProvider'; 

import {Container} from './styles'

interface Props {
  code: string,
  category: string,
  name_product: string,
  name_provider: string,
  price: string,
}

export const Registration = () => {
  const {product, setProduct} = useProducts();
  const [info, setInfo] = useState<Props>(
    {code: '', category: '', name_product: '', name_provider: '', price: ''}
  );
  
  const handleSubmit = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    setProduct([...product, info]);
  }

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
    setInfo((prev) => ({...prev, [name]:value}));
  }

  return (
    <Container>
      <form>
        <label htmlFor="code">
          Código do produto:
          <input 
            id="code" 
            type="text" 
            name="code" 
            value={info.code} 
            onChange={handleChange}
          />
        </label>
        <label htmlFor="category">
          Categoria do produto:
          <input 
            id="category" 
            type="text" 
            name="category" 
            value={info.category} 
            onChange={handleChange} 
          />
        </label>
        <label htmlFor="name_product">
          Nome do produto:
          <input 
            id="name_product" 
            type="text" 
            name="name_product" 
            value={info.name_product} 
            onChange={handleChange} 
          />
        </label>
        <label htmlFor="name_provider">
          Nome do fornecedor:
          <input 
            id="name_provider" 
            type="text" 
            name="name_provider" 
            value={info.name_provider} 
            onChange={handleChange} 
          />
        </label>
        <label htmlFor="price">
          Preço:
          <input 
            id="price" 
            type="text" 
            name="price" 
            value={info.price} 
            onChange={handleChange} 
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
      
    </Container>
  )
}