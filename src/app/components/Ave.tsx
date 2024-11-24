const aveColombia: Ave = {
  descripcion: `Aunque no señalado oficialmente, siempre se ha asociado el majestuoso cóndor de los Andes con las glorias de nuestra patria. El Cóndor campea nuestro escudo nacional y representa la soberanía. Allí aparece con las alas desplegadas y de su pico pende una corona de laurel (Laurus nobilis), árbol que desde la antigüedad simboliza la victoria y la nobleza; la corona de laurel alude a la victoria alcanzada por los forjadores de la Nación.
  El cóndor andino, cóndor de los Andes o simplemente cóndor (Vultur gryphus ) es una especie de ave de la familia Cathartidae que habita en Sudamérica. El orden al que pertenece su familia se encuentra en disputa. Se extiende por la cordillera de los Andes, siendo el ave no marina de mayor envergadura del planeta. Su nombre procede del quechua kuntur.
  Es un ave grande y negra, con plumas blancas alrededor del cuello y en partes de las alas. La cabeza carece de plumas y es de color rojo, aunque puede cambiar de tonalidad de acuerdo con el estado emocional del ave. A diferencia de la mayor parte de las aves de presa, el macho es mayor que la hembra.
  Es un ave carroñera. Alcanza la madurez sexual a los 5 o 6 años de edad y anida entre los 1000 y 5000 msnm, generalmente en formaciones rocosas inaccesibles. Posee una tasa de reproducción muy baja; se espera que al menos ponga un huevo cada dos años. Es una de las aves más longevas, consiguiendo alcanzar la edad de 75 años en cautiverio.
Es un símbolo nacional de Argentina, Bolivia, Chile, Colombia, Ecuador, Perú y Venezuela, y tiene un importante rol en el folclor y la mitología de las regiones andinas de Sudamérica.`,
  image: "/Condor_ave_nacional_de_Colombia.jpg",
  fuente: `Presidencia de la república de Colombia
  Wikipedia, La enciclopedia libre`,
};

export default function Ave() {
  return (
    <main id="ave">
      <div>
        <h1 className=" text-4xl text-blue-700 font-bold uppercase text-center">
          Ave Nacional
        </h1>
        <p className="mx-4 text-justify text-xl">{aveColombia.descripcion}</p>
        <img src={aveColombia.image} alt={aveColombia.image} className="mx-auto my-4" />
        <p className="text-xl font-bold text-red-500 m-2">
        fuente: {aveColombia.fuente}
      </p>
      </div>
    </main>
  );
}
