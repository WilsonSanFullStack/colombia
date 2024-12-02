//
async function getData() {
  try {
    const res = await fetch(
      `${process.env.URL_API_COLOMBIA}/country/colombia`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default async function Home() {
  const colombia: Country = await getData();
  // console.log(colombia);
  return (
    <main className="text-center p-2 m-2">
      <h1 className="text-4xl font-bold uppercase">{colombia.name}</h1>
      <p className="font-semibold text-xl text-justify">
        {colombia.description}
      </p>
      <p className="text-xl">capital: {colombia.stateCapital} </p>
      <p className="text-xl">superficie: {Intl.NumberFormat("es-CO").format(colombia.surface)}</p>
      <div className="text-xl">
        Lenguajes: {" "}
        {colombia.languages && colombia.languages.map((x)=> {
          return (<ol>
            <li>
              {x}
            </li>
          </ol>)
        })}
      </div>
      <p className="text-xl">
        habitantes: {Intl.NumberFormat("es-CO").format(colombia.population)}
      </p>
      <p className="text-xl">zona horaria: {colombia.timeZone}
      </p>
      <div className="text-xl">
        fronteras: 
        {colombia.borders && colombia.borders.map((x) =>{return <div key={x}>
          {x},
        </div>})}
      </div>
      <p className="text-xl">
        region: {colombia.region}
      </p>
      <p className="text-xl">
        subregion: {colombia.subRegion}
      </p>
      <p className="text-xl">
        moneda: {colombia.currency}
      </p>
      <p className="text-xl">
        codigo de moneda: {colombia.currencyCode}
      </p>
      <p className="text-xl">
        simbolo de moneda: {colombia.currencySymbol}
      </p>
      <p className="text-xl">
        codigo iso: {colombia.isoCode}
      </p>
      <p className="text-xl">
        dominio internet: {colombia.internetDomin}
      </p>
      <p className="text-xl">
        prefijo de telefono: {colombia.phonePrefix}
      </p>
      <p className="text-xl">
        prefijo de radio: {colombia.radioPrefix}
      </p>
      <p className="text-xl">
        prefijo aeronautico: {colombia.aircraftPrefix}
      </p>

    </main>
  );
}
