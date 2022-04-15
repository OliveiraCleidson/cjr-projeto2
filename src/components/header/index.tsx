import MenuComponent from "./components/menu";
import NavbarComponent from "./components/navbar";

export default function HeaderComponent() {
  return (<div>
    <NavbarComponent />
    <div>Backoffice</div>
    <MenuComponent />
  </div>
  )
}