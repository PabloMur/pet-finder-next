import Nav from "@/components/Nav";
export default function CustomContainer({ children }: any) {
  return (
    <main className="h-screen bg-red-400">
      <Nav></Nav>
      {children}
    </main>
  );
}
