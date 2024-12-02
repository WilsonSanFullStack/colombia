//
async function getDepartments() {
  try {
    const res = await fetch(`${process.env.URL_API_COLOMBIA}/Department`, {
      cache: "no-store",
    });
    const data = await res.json();
    await Promise.all(
      data.map(async (department: Department) => {
        if (department.id) {
          try {
            const res = await fetch(
              `${process.env.URL_API_COLOMBIA}/Department/${department.id}/cities`,
              {
                cache: "no-store",
              }
            );
            const cities = await res.json();
            // Transformamos los departamentos para que solo incluyan id y name
            const departmentAndCities = [];
            for (const d of cities) {
              departmentAndCities.push({ id: d.id, name: d.name });
            }
            department.cities = departmentAndCities;
          } catch (error) {
            console.error("Error al obtener las ciudades:", error);
            return null;
          }
        }
      })
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function page() {
  const department: Department[] = await getDepartments();
  return (
    <main className="text-center">
      {department.map((department) => {
        return (
          <div key={department.id}>
            <div className="grid grid-cols-2">
              <section>
                <h1>Departamento</h1>
                <h2>{department.name}</h2>
                <p>{department.description}</p>
                <p>{department.municipalities}</p>
                <p>{department.surface}</p>
                <p>{department.population}</p>
                <p>{department.phonePrefix}</p>
              </section>
              <section>
                <h1>Capital</h1>
                <h2>{department.cityCapital.name}</h2>
                <p>{department.cityCapital.description}</p>
                <p>{department.cityCapital.surface}</p>
                <p>{department.cityCapital.population}</p>
                <p>{department.cityCapital.postalCode}</p>
              </section>
            </div>
            <section className="grid grid-cols-4 m-2">
              {department.cities &&
                department.cities.map((cities) => {
                  return (
                    <div key={cities.id} className="m-1 border-2 border-slate-600">
                      {cities.name}
                    </div>
                  );
                })}
            </section>
          </div>
        );
      })}
    </main>
  );
}
