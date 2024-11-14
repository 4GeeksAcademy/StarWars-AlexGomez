import fetchDetails from "./Prueba_fetchDetails";

const fetchPlanets = async (setState, getStore) => {
  const storedData = localStorage.getItem("planets");

  if (storedData) {
    setState((prevState) => ({
      ...prevState,
      store: {
        ...prevState.store,
        planets: JSON.parse(localStorage.getItem("planets")),
        infoplaneta: JSON.parse(localStorage.getItem("infoplanets")),
      },
    }));
    return;
  }

  try {
    const response = await fetch("https://www.swapi.tech/api/planets");
    if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
    const data = await response.json();

    const details = await fetchDetails(
      data.results,
      "https://www.swapi.tech/api/planets"
    );

    setState((prevState) => ({
      ...prevState,
      store: {
        ...prevState.store,
        planets: data.results,
        infoplaneta: details,
      },
    }));

    localStorage.setItem("planets", JSON.stringify(data.results));
    localStorage.setItem("infoplanets", JSON.stringify(details));
  } catch (error) {
    console.error("Error al obtener los datos de planets:", error);
  }
};

export default fetchPlanets;
