import Navbar from "./Navbar";
import Title from "./WebTitle";

export default function Header() {
  return (
    <header>
      <Title className="float-md-start mb-0" title="Keeper" />
      <Navbar className="nav nav-masthead justify-content-center float-md-end" />
    </header>
  );
}
