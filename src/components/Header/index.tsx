import { Link } from "react-router-dom";

import {Container} from './styles'

export const Header = () => {
  return (
    <Container>
      <nav>
        <Link to="/registration">Registro</Link>
        <Link to="/list-products">Produtos</Link>
      </nav>
    </Container>
  )
}