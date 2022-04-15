import { Link } from "react-router-dom";
import { Container, Navlinks } from "./styles";

export default function NavbarComponent() {
  return (<Container>
    <div className="logo">
      <p>dinnerdash</p>
    </div>
    <Navlinks>
      <li><Link to="#">backoffice</Link></li>
      <li><Link to="#">perfil</Link></li>
      <li><Link to="#">sair</Link></li>
    </Navlinks>
  </Container>
  );
}