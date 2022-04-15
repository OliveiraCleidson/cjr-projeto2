import { Container, Navlinks } from "./styles";

export default function NavbarComponent() {
  return ( <Container>
    <div className="logo">
                      <p>dinnerdash</p>
                  </div>
                      <Navlinks>
                          <li>backoffice</li>
                          <li>perfil</li>
                          <li>sair</li>
                      </Navlinks>
  </Container>
  );
}