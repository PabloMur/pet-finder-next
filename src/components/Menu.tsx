import MenuLi from "@/ui/MenuLi";
export default function Menu() {
  return (
    <menu className="flex">
      <MenuLi href={"/"}>My Data</MenuLi>
      <MenuLi href={"/"}>My Pets</MenuLi>
      <MenuLi href={"/"}>My Reports</MenuLi>
      <MenuLi href={"/login"}>Login</MenuLi>
      <MenuLi href={"/signup"}>Signup</MenuLi>
    </menu>
  );
}
