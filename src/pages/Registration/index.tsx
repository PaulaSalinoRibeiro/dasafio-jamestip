import {useState, ChangeEvent, MouseEvent } from 'react';
import { useProducts } from '../../context/ProductsProvider';
import { Header } from '../../components/Header';

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
  const [disabled, setdisabled] = useState(true);
  const [info, setInfo] = useState<Props>(
    {code: '', category: '', name_product: '', name_provider: '', price: ''}
  );

  const keyLocalStorage = '@jamesTip:registrations';

  const handleSubmit = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    
    const alreadyExistRegister = product?.some(item => item.code === info.code);

    if (alreadyExistRegister) {
      global.alert('Já existe um produto com o código cadastrado!')
    } else {
      setProduct([...product, info]);
      localStorage.setItem(keyLocalStorage, JSON.stringify([...product, info]));
      setInfo({code: '', category: '', name_product: '', name_provider: '', price: ''});
      setdisabled(true);
    }
  }

  const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
    const {code, category, name_product, name_provider, price} = info;

    setInfo((prev) => ({...prev, [name]:value}));
    
    if (code.length !== 0 
      && category.length !== 0 
      && name_product.length !== 0
      && name_product.length !== 0
      && name_provider.length !== 0 
      && price.length !== 0) {
      setdisabled(false);
    } 
  }

  return (
    <>
      <Header/>
      <Container>
        <form>
          <label htmlFor="code">
            Código do produto:
            <input 
              id="code"
              placeholder="Ex: CD999"
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
              placeholder="Ex: Eletrônico"
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
              placeholder="Ex: Produto"
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
              placeholder="Ex: Fornecedor" 
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
              placeholder="Ex: 999,99"
              type="text" 
              name="price" 
              value={info.price} 
              onChange={handleChange} 
            />
          </label>
          <button
            type="submit"
            disabled={disabled}
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </form>
      </Container>
    </>
  )
}