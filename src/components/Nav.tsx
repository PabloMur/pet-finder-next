import Logo from "./Logo";
import Menu from "./Menu";

export default function Nav() {
  return (
    <nav className="h-14 bg-purple-800 flex justify-between items-center">
      <Logo />
      <Menu />
    </nav>
  );
}
