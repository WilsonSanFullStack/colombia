async function getAllRegions() {
  const res = await fetch(`${process.env.URL_API_COLOMBIA}/Region`, {
    cache: "no-store",
  });
  const data = await res.json();
  await Promise.all(data.map(async (region: Region) => {
    if (region.id) {
      try {
        const res = await fetch(
          `${process.env.URL_API_COLOMBIA}/Region/${region.id}/departments`,
          {
            cache: "no-store",
          }
        );
        const departments = await res.json();
        // Transformamos los departamentos para que solo incluyan id y name
        const regionAndDepartments = []
        for (const d of departments) {
            regionAndDepartments.push({id: d.id, name: d.name});
        }
        region.departments=regionAndDepartments
      } catch (error) {
        console.error("Error al obtener región con departamentos:", error);
        return null;
      }
    }
  }));
  return data;
}

export default async function page() {
  const region: Regions = await getAllRegions();

  return (
    <main className="text-center">
      {region &&
        region.map((region) => {
          return (
            <div key={region.id + 1} className="m-4">
              <h1 className="text-2xl font-bold">{region.name}</h1>
              <p>{region.description}</p>
              <h1 className="text-xl font-bold">Departamentos</h1>
              <div className="grid grid-cols-4">
                {region.departments &&
                  region.departments.map((department) => {
                    return (
                      <div
                        key={department?.id}
                        className="border-2 border-slate-400 m-1"
                      >
                        <p>{department?.name}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </main>
  );
}
