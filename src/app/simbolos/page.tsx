import Link from "next/link";
import Bandera from "../components/Bandera";
import Escudo from "../components/Escudo";
import Himno from "../components/Himno";
import Arbol from "../components/Arbol";
import Ave from "../components/Ave";
import Flor from "../components/Flor";



const fuentePrincipal: string = "https://www.todacolombia.com/";
export default function page() {
  return (
    <main className="">
      <div className="mt-10 m-1">
        <Bandera />

        <Escudo />

        <Himno />

        <Arbol />

        <Ave />

        <Flor />
      </div>
      <div>
      <p className="text-xl font-bold text-yellow-500 m-2">
      fuente principal de informacion fue la pagina  <Link href={fuentePrincipal}>{fuentePrincipal}</Link>
      </p>
      </div>
    </main>
  );
}
