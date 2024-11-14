import fetchDetails from "./Prueba_fetchDetails";

const fetchPeople = async (setState, getStore) => {
  const storedData = localStorage.getItem("people");

  if (storedData) {
    setState((prevState) => ({
      ...prevState,
      store: {
        ...prevState.store,
        people: JSON.parse(localStorage.getItem("people")),
        infopeople: JSON.parse(localStorage.getItem("infopeople")),
      },
    }));
    return;
  }

  try {
    const response = await fetch("https://www.swapi.tech/api/people");
    if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
    const data = await response.json();

    const details = await fetchDetails(
      data.results,
      "https://www.swapi.tech/api/people"
    );

    setState((prevState) => ({
      ...prevState,
      store: {
        ...prevState.store,
        people: data.results,
        infopeople: details,
      },
    }));

    localStorage.setItem("people", JSON.stringify(data.results));
    localStorage.setItem("infopeople", JSON.stringify(details));
  } catch (error) {
    console.error("Error al obtener los datos de people:", error);
  }
};

export default fetchPeople;
