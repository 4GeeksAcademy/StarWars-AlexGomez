const getState = ({ getStore, getActions, setStore }) => {
  const baseUrl = "https://www.swapi.tech/api";

  return {
    store: {
      intro: true,
      films: [],
      people: [],
      planets: [],
      species: [],
      starships: [],
      vehicles: [],
      infoPeople: [],
      infoPlanets: [],
      infoVehicles: [],
      favorites: [],
      index: null,
      globalChange: false,
    },

    actions: {
      // Mostrar introducción
      intro: () => {
        setStore({ intro: false });
      },

      // Función para obtener detalles de los elementos
      fetchDetails: async (items, detailUrl) => {
        if (!items || items.length === 0) return []; 

        const promises = items.map(async (item) => {
          try {
            const response = await fetch(`${detailUrl}/${item.uid}`);
            const data = await response.json();
            return data.result.properties;
          } catch (error) {
            console.error("Error fetching details:", error);
            return null;
          }
        });
        return await Promise.all(promises);
      },

      // Función para obtener datos de una categoría específica
      fetchCategoryData: async (category) => {
        const storedData = localStorage.getItem(category);

        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setStore({
            [category]: parsedData.results || [],
            [`info${category.charAt(0).toUpperCase() + category.slice(1)}`]: parsedData.details || [],
          });
          return;
        }

        try {
          const response = await fetch(`${baseUrl}/${category}`);
          if (!response.ok) throw new Error("Error en la respuesta de la red");

          const data = await response.text();
          let results, details;
          try {
            const jsonData = JSON.parse(data);
            results = category === "films" ? jsonData.result : jsonData.results || []; 
            details = await getActions().fetchDetails(results, `${baseUrl}/${category}`);
          } catch (error) {
            console.error('La respuesta no es JSON:', data);
            return;
          }

          setStore({ [category]: results });
          setStore({ [`info${category.charAt(0).toUpperCase() + category.slice(1)}`]: details });

          localStorage.setItem(category, JSON.stringify({ results, details }));
        } catch (error) {
          console.error(`Error al obtener los datos de ${category}:`, error);
          setStore({ [category]: [] });
        }
      },

      // Función para obtener datos
      getData: (element) => {
        const actions = getActions();
        actions.fetchCategoryData(element);
      },

      // Agregar o actualizar favoritos
      addFavorite: (name) => {
        const store = getStore();
        setStore({ favorites: name });
      },

      // Buscar y actualizar el estado
      search: (value, type) => {
        setStore({ [type]: value });
      },

      // Establecer índice
      setIndex: (index) => {
        setStore({ index });
      },
    },
  };
};

export default getState;
