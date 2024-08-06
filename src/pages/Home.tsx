import Clients from "../components/Clients";
import Products from "../components/Products";
import Inicio from "../components/Inicio";
import Whats from "../components/Whats";


export default function Home() {
  return (
    <>
      <Inicio /> 
      <Clients />
      <Products />
      <Whats />
    </>

  );
}