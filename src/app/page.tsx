// 
async function getData() {
  try {
    const res = await fetch(
      `${
        process.env.URL_API_COLOMBIA
      }/country/colombia`,
      // { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  }
  export default async function Home() {
    const colombia: Country = await getData();
    console.log(colombia)
    return (
      <main className="text-center">
        <h1 className="text-4xl font-bold uppercase">{colombia.name}</h1>
        <p className="font-semibold text-xl text-justify p-4">{colombia.description}</p>
      </main>
    );
  }
  