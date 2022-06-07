import {useState} from 'react';
import {useProducts} from '../../context/ProductsProvider'; 

interface Props {
  code: string,
  category: string,
  name_product: string,
  name_provider: string,
  price: string,
}

export const Registration = () => {
  const {setProduct} = useProducts();
  const [info, setInfo] = useState<Props>({code: '', category: '', name_product: '', name_provider: '', price: ''});
  return (
    <>
      
    </>
  )
}