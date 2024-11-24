const arbolColombia: Arbol = {
  descripcion: `La Palma de Cera del Quindío es el Árbol Nacional de Colombia. Su nombre científico es "Ceroxylon Quindiuense". Es una palmera de imponente belleza, extraordinaria fortaleza y legendaria longevidad. Esta palma es nativa de los valles altos andinos del Parque Nacional Natural Los Nevados, presente en el valle de Cocora del Departamento del Quindío, Colombia. Puede llegar a alcanzar alturas hasta de 70 metros.

Fue escogida como árbol Nacional de Colombia por la comisión preparatoria del III Congreso Suramericano de botánica, celebrado en Bogotá en 1949. Posteriormente fue adoptado oficialmente como símbolo patrio mediante la ley 61 de 1985, sancionada el 16 de septiembre por el presidente Belisario Betancur.

Aunque la norma que establece la palma de cera como símbolo nacional es relativamente reciente, desde hace años existía un acuerdo de opinión que la reconocía como tal, tanto entre la población general como entre la comunidad científica.
Las primeras noticias sobre la existencia de palmas de cera se deben a José Celestino Mutis, quien en 1785 consignó en sus apuntes interesantes datos sobre las especies propias de Timaná y de Guaduas, conocidas entonces con el nombre de "chuapa". La especie fue validada mediante una descripción publicada en 1808. Allí se dan interesantes datos relativos a la cera y a los múltiples usos dados al tronco y a las hojas. En una carta dirigida a Bertold Seeman, quien preparaba un interesante libro sobre las palmeras, y fechada en 1855 señala al naturalista alemán: "Hallé este árbol en la Cordillera de los Andes en el Paso del Quindío, entre Ibagué y Cartago, no más bajo en el declive de los 7.930, ni más alto que los 9.700 pies ingleses (Usted puede decir en su "Historia Popular de las Palmas", entre 7.900 y 9.700 pies ingleses) en compañía de árboles de Podocarpus [chaquiros] y Quercus granatensis [robles])".

La adopción de la palma de cera como emblema se debió a una propuesta de Armando Dugand, entonces director del Instituto de Ciencias Naturales de la Universidad Nacional de Colombia y reconocido especialista en palmas, quien en julio de 1949 la propuso como tal al comité organizador del Tercer Congreso Suramericano de Botánica. Este comité estaba presidido por Enrique Pérez Arbeláez, el naturalista más destacado del siglo XX en Colombia, fundador del Herbario Nacional Colombiano y del Instituto de Ciencias Naturales y promotor de la publicación de la Flora de la Real Expedición Botánica del Nuevo Reino de Granada.

En una documentada exposición de motivos, Dugand destacó la palma de cera como un verdadero patrimonio estético de la nación y como una de las notabilidades florísticas más típicas de la vegetación colombiana, no sólo por ser un elemento destacado y característico del paisaje andino, sino por la cera que produce, por lo extraordinario de su hábitat, que se sale ampliamente de los límites geográfico-altidudinales comunes en la familia de las palmas, además de ser la más hermosa y más desarrollada dentro del género, puesto que puede superar los 50 metros de altura.`,
  image: "/Palma_de_cera_arbol_nacional_de_Colombia.jpg",
  palma: {
    descripcion: `La palma de cera del Quindío (Ceroxylon quindiuense spp) es una palma nativa de los bosques alto andinos del Parque Nacional Natural Los Nevados, en Colombia. Sin embargo las poblaciones más grandes y mejor conservadas se encuentran en los bosques altos andinos del Departamento del Tolima (Corregimiento de Toche, Municipio de Ibagué). También está presente en el valle de Cocora del departamento del Quindío en el eje cafetero.`,
    nombre: "Ceroxylon quindiuense H. Wendl.",
    familia: "Arecaceae (Palmae)",
    formaCopa: "Penacho semiesférico, amplio y espeso.",
    color: "Verde oscuro a grisáceo.",
    porte: "Muy alto, alcanza hasta los 60 metros de altura.",
    crecimiento:
      "Muy lento hasta formar la base del tallo, luego medianamente lento en condiciones adecuadas.",
    tronco: "Cilíndrico, erecto, liso, cubierto con una capa de cera.",
    follaje: "Denso.",
    corteza:
      " Lisa, blancuzca, con anillos oscuros acentuados, dejados en forma de cicatriz por la caída de las hojas.",
    hoja: "Pinnadas y de gran tamaño.",
    flores: "Agrupadas en racimos, color crema.",
    fruto:
      "En drupa globosa, dispuesto en racimos de color rojizo en estado maduro.",
    image: "/palma_de_cera_colombia.jpg",
    fuente: `Presidencia de la república de Colombia
  Wikipedia, La enciclopedia libre
  Imagen: Imagen valle de cocora - Jana V. M. -- Imagen palma de cera Christian Holzinger`,
  },
};

export default function Arbol() {
  return (
    <main id="arbol">
      <h1 className="text-4xl text-blue-700 font-bold uppercase text-center">
        Arbol
      </h1>
      <h3 className="text-xl text-blue-700 font-bold uppercase text-center">historia</h3>
      <p className="mx-4 text-justify text-xl">{arbolColombia.descripcion}</p>
      <img src={arbolColombia.image} alt={arbolColombia.image}
      className="mx-auto my-4" />
      <section>
        <section>
          <p className="mx-4 text-justify text-xl">{arbolColombia.palma.descripcion}</p>
        </section>
        <section>
          <h4 className="text-center text-xl text-blue-700 font-bold uppercase">Nombre: </h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.nombre} </p>
        </section>
        <section>
          <h4  className="text-center text-xl text-blue-700 font-bold uppercase">Familia: </h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.familia} </p>
        </section>
        <section>
          <h4 className="text-center text-xl text-blue-700 font-bold uppercase">forma de la copa:</h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.formaCopa}</p>
        </section>
        <section>
          <h4 className="text-center text-xl text-blue-700 font-bold uppercase">color: </h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.color}</p>
        </section>
        <section>
          <h4 className="text-center text-xl text-blue-700 font-bold uppercase">porte: </h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.porte}</p>
        </section>
        <section>
          <h4 className="text-center text-xl text-blue-700 font-bold uppercase">crecimiento: </h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.crecimiento}</p>
        </section>
        <section>
          <h4 className="text-center text-xl text-blue-700 font-bold uppercase">tronco: </h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.tronco}</p>
        </section>
        <section>
          <h4 className="text-center text-xl text-blue-700 font-bold uppercase">follaje: </h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.follaje}</p>
        </section>
        <section>
          <h4 className="text-center text-xl text-blue-700 font-bold uppercase">corteza: </h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.corteza}</p>
        </section>
        <section>
          <h4 className="text-center text-xl text-blue-700 font-bold uppercase">hoja: </h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.hoja}</p>
        </section>
        <section>
          <h4 className="text-center text-xl text-blue-700 font-bold uppercase">flores: </h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.flores}</p>
        </section>
        <section>
          <h4 className="text-xl text-blue-700 font-bold uppercase text-center">fruto: </h4>
          <p className="mx-4 text-center text-xl">{arbolColombia.palma.fruto}</p>
        </section>
        <section>
          <img
            src={arbolColombia.palma.image}
            alt={arbolColombia.palma.image}
            className="mx-auto my-4"
          />
        </section>
        <section>
        <p className="text-xl font-bold text-red-500 m-2">
        fuente: {arbolColombia.palma.fuente}
      </p></section>
      </section>
    </main>
  );
}
