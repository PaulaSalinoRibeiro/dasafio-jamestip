import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <Link to="/registration">Registro</Link>
      <Link to="/list-products">Produtos cadastrados</Link>
    </nav>
  )
}