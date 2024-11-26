//
async function getRegiones() {
  try {
    const res = await fetch(`${process.env.URL_API_COLOMBIA}/Region`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function getRegionesDepartments() {
  try {
    const res = await fetch(
      `${process.env.URL_API_COLOMBIA}/Region/2/departments`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default async function page() {
  const region: Regions = await getRegiones();
  const regionDepartments = await getRegionesDepartments()
  return (
    <main className="text-center">
      {region.map((region) => {
        return <div key={region.id}>
        <h1>
          {region.name}
        </h1>
        <p>
          {region.description}
        </p>
        <button>Departamentos</button>
        {/* {regionDepartments && regionDepartments.map((department) => {
          return <div key={department.id}>
            <h1>
              {department.name}
            </h1>
          </div>
        })} */}
        </div>;
      })}
    </main>
  );
}
