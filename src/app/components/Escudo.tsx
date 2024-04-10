const escudoColombia: Escudo = {
  escudoArmas: ` El Escudo de armas de la República de Colombia es el emblema heráldico que 
  representa al país, y que junto con la bandera y el himno nacional, tiene la categoría de 
  símbolo patrio.
El actual emblema tiene sus orígenes en el escudo aprobado por medio de la ley 3 del 9 de 
mayo de 1834, siendo presidente de la República de la Nueva Granada el general Francisco 
de Paula Santander. Los colores y la disposición de los mismos fueron adoptados y reafirmados 
por varios decretos, particularmente los dictaminados el 17 de mayo de 1924 y el 11 de enero 
de 1934.
Finalmente el escudo es reglamentado por medio del decreto 3558 del 9 de noviembre de 1949, 
el cual aprueba el «Reglamento de Servicio de Guarnición», donde se describe de manera puntual 
la reproducción de la mayoría de sus partes.`,
  formaEscudoArmas: "/Escudo_de_armas_republica_de_Colombia.jpg",
  descripcion: {
    descripcion:
      "De acuerdo con las disposiciones legales el escudo de armas de la República de Colombia es:",
    artículo365: {
      titulo: "Artículo 365:",
      primera:
        " El perímetro será de forma suiza, de seis tantos de ancho por ocho de alto, y terciado en faja. La faja superior o jefe, en campo azul, lleva en el centro una granada de oro abierta y granada de rojo, con tallo y hojas del mismo metal. A cada lado de la granada va una cornucopia de oro inclinada y vertiendo hacia el centro monedas la del lado derecho, y frutos propios de la zona tórrida la del izquierdo. La faja del medio, en campo de platino, lleva en el centro un gorro frigio enastado en una lanza, como símbolo de la libertad. En la faja inferior va el Istmo de Panamá, en azul, con sus dos mares adyacentes ondeados de plata, y un navío negro con sus velas desplegadas, en cada uno de ellos.",
      segunda:
        "El escudo reposa sobre cuatro banderas divergentes de la base, de las cuales las dos inferiores formarán un ángulo de noventa grados, y las dos superiores irán separadas de las primeras en ángulo de quince grados. Estas banderas van recogidas hacia el vértice del escudo.",
      tercera:
        "El jefe del escudo será sostenido por una corona de laurel pendiente del pico de un cóndor con las alas desplegadas. En una cinta de oro asida al escudo y entrelazada a la corona, va escrito en letras negras mayúsculas este lema: 'Libertad y Orden'.",
    },
    artículo366: {
      titulo: "Artículo366-Normas para dibujar el Escudo Nacional:",
      a: "El blasón tiene forma suiza, con proporciones de seis (6) de ancho por ocho (8) de alto.",
      b: "Por terciado en faja se entiende que el escudo está dividido en tres partes iguales; pero, por razones de orden estético, el campo del centro se reduce un poco, sin que esta dimensión llegue a la tercera parte de la anchura ordinaria.",
      c: "Es erróneo adornar el escudo con un ribete o borde, como también dividir con él los tres campos.",
      d: "La derecha e izquierda se determinan considerando el escudo como colocado sobre el pecho y no al frente de quien lo observe.",
      e: "El gorro debe estar mirando a la derecha y un poco deformado hacia arriba para que dé la impresión de la punta de la lanza.",
      f: "Los barcos del campo inferior deben tener tres (3) palos por lo menos y estar navegando hacia la derecha del escudo.",
      g: "Las banderas deben salir del borde inferior y no de detrás del escudo.",
      h: "El cóndor estará con la cabeza colocada hacia la derecha para que indique Legitimidad.",
    },
  },
  elementos: {
    descripcion: `Por Joaquín Piñeros Corpas
Dentro de su interpretación actualizada podría decirse que el cóndor es la ratificación de 
la vocación aviadora colombiana y del compromiso de las generaciones contemporáneas de 
dominar el vasto y contrastado territorio nacional, mediante el ejercicio de la libertad.`,
    primera: `La primera zona exige a los colombianos la explotación, el incremento y el usufructo de 
sus considerables recursos naturales.`,
    segunda: `La segunda recuerda que la libertad se sigue conquistando todos los días, como en el 
Pantano de Vargas y Junín, lo hizo el pueblo con la misma lanza en la que campea el 
gorro frigio.`,
    tercera: `La tercera zona afirma categóricamente la privilegiada posición geográfica de Colombia 
en lo continental y en lo universal, especialmente su condición costera del Atlántico, 
del Pacífico y la rivera del Amazonas.`,
  },
  regulacionyuso: {
    descripcion: `El escudo de Colombia, junto con la bandera y el himno, están 
  reglamentados por medio del decreto 1967 del 15 de agosto de 1991. En lo referente al 
  escudo, el decreto dispone lo siguiente:`,
    primera: `1. El escudo de Colombia solo debe usarse en la Bandera Nacional del Presidente de la 
República, en las Banderas de Guerra, en los membretes de papel, sobres, etc., mediante 
los cuales se ventilen asuntos estrictamente oficiales. Sin embargo puede esculpirse en 
monumentos, iglesias, capillas, panteones o cementerios militares, cuarteles, buques, 
centros docentes y otros lugares, siempre que reúnan condiciones de severidad, seriedad 
y respeto.`,
    segunda: `2. El escudo puede usarse en medios publicitarios solamente cuando dichos mensajes 
conlleven a la formación de un sentido nacionalista o realcen los valores patrios.`,
    tercera: `3. Cuando se usen los Símbolos Patrios en prendas de vestir, objetos y eventos, deben 
llevarse con el mayor respeto y decoro.`,
    cuarta: `4. Es obligación de todos los establecimientos de educación del país poseer Bandera y 
Escudo Nacional, los cuales deben mantenerse con el mayor respeto y dignidad en un aula 
principal o salón de actos.`,
    quita: `5. Así mismo es obligación de los educadores y padres de familia fomentar el culto a 
los Símbolos Patrios. Como refuerzo a este culto, mínimo una vez al mes debe efectuarse 
un acto en el cual el alumno que más se haya distinguido debe izar la Bandera Nacional, 
mientras la comunidad estudiantil entona el Himno Nacional para fomentar el espíritu 
patriótico de los ciudadanos.`,
  },
  fuente: `Presidencia de la república de Colombia,
Wikipedia, La enciclopedia libre`,
};

export default function Escudo() {
  return (
    <main id="escudo">
      <h1 className="text-4xl text-blue-700 font-bold uppercase text-center">
        escudo
      </h1>
      <p className="mx-4 text-justify text-xl">{escudoColombia.escudoArmas}</p>
      <img
        src={escudoColombia.formaEscudoArmas}
        alt="escudo de armas"
        className="mx-auto my-4 "
      />
      <h1 className="text-2xl text-blue-700 font-bold capitalize text-center">
        descripcion
      </h1>
      <p className="mx-4 text-center text-xl">
        {escudoColombia.descripcion.descripcion}
      </p>
      <h1 className="text-2xl text-blue-700 font-bold capitalize text-center">
        {escudoColombia.descripcion.artículo365.titulo}
      </h1>
      <h1 className="text-xl text-blue-700 font-bold capitalize text-center">
        primera:
      </h1>
      <p className="mx-4 text-justify m-2 text-xl">
        {escudoColombia.descripcion.artículo365.primera}
      </p>
      <h1 className="text-xl text-blue-700 font-bold capitalize text-center">
        segunda:
      </h1>
      <p className="mx-4 text-justify text-xl">
        {escudoColombia.descripcion.artículo365.segunda}
      </p>
      <h1 className="text-xl text-blue-700 font-bold capitalize text-center">
        tercera:
      </h1>
      <p className="mx-4 text-justify text-xl">
        {escudoColombia.descripcion.artículo365.tercera}
      </p>
      <h1 className="text-2xl text-blue-700 font-bold capitalize text-center">
        {escudoColombia.descripcion.artículo366.titulo}
      </h1>
      <p className="mx-4 text-justify text-xl">
        a): {escudoColombia.descripcion.artículo366.a}
      </p>
      <p className="mx-4 text-justify text-xl">
        b): {escudoColombia.descripcion.artículo366.b}
      </p>
      <p className="mx-4 text-justify text-xl">
        c): {escudoColombia.descripcion.artículo366.c}
      </p>
      <p className="mx-4 text-justify text-xl">
        d): {escudoColombia.descripcion.artículo366.d}
      </p>
      <p className="mx-4 text-justify text-xl">
        e): {escudoColombia.descripcion.artículo366.e}
      </p>
      <p className="mx-4 text-justify text-xl">
        f): {escudoColombia.descripcion.artículo366.f}
      </p>
      <p className="mx-4 text-justify text-xl">
        g): {escudoColombia.descripcion.artículo366.g}
      </p>
      <p className="mx-4 text-justify text-xl">
        h): {escudoColombia.descripcion.artículo366.h}
      </p>
      <h1 className="text-2xl text-blue-700 font-bold capitalize text-center">
        elementos
      </h1>
      <p className="mx-4 text-justify text-xl">
        {escudoColombia.elementos.descripcion}
      </p>
      <h1 className="text-xl text-blue-700 font-bold capitalize text-center">
        primera:
      </h1>
      <p className="mx-4 text-center m-2 text-xl">
        {escudoColombia.elementos.primera}
      </p>
      <h1 className="text-xl text-blue-700 font-bold capitalize text-center">
        segunda:
      </h1>
      <p className="mx-4 text-center text-xl">
        {escudoColombia.elementos.segunda}
      </p>
      <h1 className="text-xl text-blue-700 font-bold capitalize text-center">
        tercera:
      </h1>
      <p className="mx-4 text-center text-xl">
        {escudoColombia.elementos.tercera}
      </p>
      <h1 className="text-2xl font-bold capitalize text-center text-blue-700">
        regulacion y uso
      </h1>
      <p className="mx-4 text-justify text-xl">
        {escudoColombia.regulacionyuso.descripcion}
      </p>
      <h1 className="text-xl font-bold capitalize text-center text-blue-700">
        primera
      </h1>
      <p className="mx-4 text-justify text-xl">
        {escudoColombia.regulacionyuso.primera}
      </p>
      <h1 className="text-xl font-bold capitalize text-center text-blue-700">
        segunda
      </h1>
      <p className="mx-4 text-center text-xl">
        {escudoColombia.regulacionyuso.segunda}
      </p>
      <h1 className="text-xl font-bold capitalize text-center text-blue-700">
        tercera
      </h1>
      <p className="mx-4 text-center text-xl">
        {escudoColombia.regulacionyuso.tercera}
      </p>
      <h1 className="text-xl font-bold capitalize text-center text-blue-700">
        cuarta
      </h1>
      <p className="mx-4 text-center text-xl">
        {escudoColombia.regulacionyuso.cuarta}
      </p>
      <h1 className="text-xl font-bold capitalize text-center text-blue-700">
        quinta
      </h1>
      <p className="mx-4 text-justify text-xl">
        {escudoColombia.regulacionyuso.quita}
      </p>
      <p className="text-xl font-bold text-red-500 m-2">
        fuente: {escudoColombia.fuente}
      </p>
    </main>
  );
}
