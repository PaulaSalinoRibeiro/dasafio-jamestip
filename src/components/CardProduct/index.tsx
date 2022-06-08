
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
  return (
    <Container key={code}>
      <p>{`Código: ${code}`}</p>
      <p>{`Categoria: ${category}`}</p>
      <p>{`Nome: ${name_product}`}</p>
      <p>{`Fornecedor: ${name_provider}`}</p>
      <p>{`Preço: ${price}`}</p>
    </Container>
  )
}