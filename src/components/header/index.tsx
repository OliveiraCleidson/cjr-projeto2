import MenuComponent from "./components/menu";
import NavbarComponent from "./components/navbar";
import { Container } from "./styles";

export default function HeaderComponent() {
  return (
    <Container>
      <NavbarComponent />
      <div>Backoffice</div>
      <MenuComponent />
    </Container>
  )
}