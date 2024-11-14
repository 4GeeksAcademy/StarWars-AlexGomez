const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
     
      
      infoplaneta: [],
      planets: [],
      vehicles: [],
      infoVehicles: [],
      people: [],
      favorites: [],
      infopeople: [],
      globalChange: false,
      
    },
    actions: {
     

        Favorite: (name) => {
        
              setStore(name);
      },
         GlobalChange(value) {
    
           setStore({ globalChange: value ? false : true});
        
      },
      search: (value,type) => {
        if (type === "People") {
          setStore({ people: value });
        } else if (type === "Planets") {
          setStore({ planets: value });
        } else if (type === "Vehicles") {
          setStore({ vehicles: value });
        }
       
      }
      
      ,
      
    },
  };
};

export default getState;
