async function getRegionWithDepartments(regionId: number) {
  try {
    const res = await fetch(
      `${process.env.URL_API_COLOMBIA}/Region/${regionId}/departments`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();

    // Transformamos los departamentos para que solo incluyan id y name
    const transformedRegion = {
      id: data.id,
      name: data.name,
      description: data.description,
      departments: data.departments.map((dept: any) => ({
        id: dept.id,
        name: dept.name,
      })),
    };

    // console.log(transformedRegion);
    return transformedRegion;
  } catch (error) {
    console.error("Error al obtener región con departamentos:", error);
    return null;
  }
}

async function getAllRegions() {
  const res = await fetch(`${process.env.URL_API_COLOMBIA}/Region`, {
    cache: "no-store",
  });
  const data = await res.json();
  const regionIds = data.map((region: Region) => region.id); // IDs de las regiones
  const regions = await Promise.all(regionIds.map(getRegionWithDepartments));
  // console.log(regions);
  return regions;
}

export default async function page() {
  const region: Regions = await getAllRegions();
  // console.log(region);
  return (
    <main className="text-center">
      {region.map((region) => {
        return (
          <div key={region.id} className="m-4">
            <h1 className="text-2xl font-bold">{region.name}</h1>
            <p>{region.description}</p>
            <h1 className="text-xl font-bold">Departamentos</h1>
            <div className="grid grid-cols-4">
              {region.departments &&
                region.departments?.map((department) => {
                  return (
                    <div
                      key={department.id}
                      className="border-2 border-slate-400 m-1"
                    >
                      <p>{department.name}</p>
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
