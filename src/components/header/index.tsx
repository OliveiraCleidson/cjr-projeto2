import MenuComponent from "./components/menu";
import NavbarComponent from "./components/navbar";
import { Container } from "./styles";

export default function HeaderComponent() {
  return (
    <Container>
      <NavbarComponent />
              <div className="banner">
                  <h1>Backoffice</h1>
                  <p>Gerencie pedidos, refeições e mais.</p>
              </div> 
              <div className="menu">
                  <ul>
                      <li>Pedidos</li>
                      <li>Usuários</li>
                      <li>Refeições</li>
                      <li>Categorias de Refeição</li>
                  </ul>
              </div>
    </Container>
  )
}