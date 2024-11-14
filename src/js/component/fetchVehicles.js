import fetchDetails from "./Prueba_fetchDetails";

const fetchVehicles = async (setState, getStore) => {
  const storedData = localStorage.getItem("vehicles");

  if (storedData) {
    setState((prevState) => ({
      ...prevState,
      store: {
        ...prevState.store,
        vehicles: JSON.parse(localStorage.getItem("vehicles")),
        infoVehicles: JSON.parse(localStorage.getItem("infovehicles")),
      },
    }));
    return;
  }

  try {
    const response = await fetch("https://www.swapi.tech/api/vehicles");
    if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
    const data = await response.json();

    const details = await fetchDetails(
      data.results,
      "https://www.swapi.tech/api/vehicles"
    );

    setState((prevState) => ({
      ...prevState,
      store: {
        ...prevState.store,
        vehicles: data.results,
        infoVehicles: details,
      },
    }));

    localStorage.setItem("vehicles", JSON.stringify(data.results));
    localStorage.setItem("infovehicles", JSON.stringify(details));
  } catch (error) {
    console.error("Error al obtener los datos de vehicles:", error);
  }
};

export default fetchVehicles;
