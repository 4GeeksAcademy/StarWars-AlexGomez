const getState = ({ getStore, getActions, setStore }) => {
  const baseUrl = "https://www.swapi.tech/api";

  return {
    store: {
      intro: true,
      url:"",
      films: [],
      people: [],
      planets: [],
      species: [],
      starships: [],
      vehicles: [],
      infoPeople: [],
      infoPlanets: [],
      infoVehicles: [],
      infoStarships: [],
      infoSpecies: [],
      infoFilms: [],
      favorites: [],
      index: null,
      datosNav: [],
      with:window.innerWidth,
    },

    actions: {
      SetdataNav: async (typo,id,url) => {
            setStore({datosNav: [typo,id,url]});
      }
      ,
      intro: () => {
        setStore({ intro: false });
      },

      fetchDetails: async (items, detailUrl) => {
        if (!items || items.length === 0) return []; 

        const promises = items.map(async (item) => {
          try {
            const response = await fetch(`${detailUrl}/${item.uid}`);
            const data = await response.json();
            return data.result.properties;
          } catch (error) {
            console.error("Error fetching details (line 39):", error);
            return null;
          }
        });
        return await Promise.all(promises);
      },

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
        
            return;
          }

          setStore({ [category]: results });
          setStore({ [`info${category.charAt(0).toUpperCase() + category.slice(1)}`]: details });

          localStorage.setItem(category, JSON.stringify({ results, details }));
        } catch (error) {
          console.error(`Error al obtener los datos de ${category} linea 78:`, error);
          setStore({ [category]: [] });
        }
      },

      getData: (element) => {
        const actions = getActions();
        actions.fetchCategoryData(element);
      },

      addFavorite: (name) => {
        const store = getStore();
        setStore({ favorites: name });
      },

      search: (value) => {
      
      
        if (typeof value !== 'string') {
          console.error('Search value must be a string');
          return; 
        }
        const types = ['people', 'vehicles', 'species', 'planets', 'starships', 'films'];
        const store = getStore();

        const filtered = types.reduce((acc, type) => {
          const data = store[type] || []; 
          acc[`filtered${type.charAt(0).toUpperCase() + type.slice(1)}`] = data.filter(item => { 
            return item.name && typeof item.name === 'string' && item.name.toLowerCase().includes(value.toLowerCase());
          });
          return acc;
        }, {});
    
        setStore(filtered);
      },
      
      setIndex: (index) => {
        setStore({ index });
      },
      setUrl: (url) => {
        setStore({ url });
      }
    },
  };
};

export default getState;
