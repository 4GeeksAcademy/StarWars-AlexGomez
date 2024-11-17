import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Description = () => {
  const { store,actions } = useContext(Context);
  const { type, id } = useParams();  // Extraemos 'type' e 'id' de la URL
  const [itemDetails, setItemDetails] = useState(null);
  const [infoDetails, setInfoDetails] = useState(null);

  // console.log para asegurarse de que los valores de `type` e `id` son correctos
  console.log("type", type, "id", id);
  console.log("store", store);
  

  useEffect(() => {
    const fetchItemDetails = async () => {
      // Buscar el item correspondiente con el 'id' y 'type' de la URL
      let item = store[type]?.find((item) => item.uid === id) || null;
      
      if (item) {
        setItemDetails(item);  // Setear los detalles del item

        let info;
        switch (type) {
          case "people":
            info = store.infoPeople?.[parseInt(id) - 1];  // Asegúrate de que 'id' es un número válido
            break;
          case "planets":
            info = store.infoPlanets?.[parseInt(id) - 1];
            break;
          case "films":
            info = store.infoFilms?.[parseInt(id) - 1];
            break;
          case "species":
            info = store.infoSpecies?.[parseInt(id) - 1];
            break;
          case "starships":
            info = store.infoStarships?.[parseInt(id) - 1];            
            break;
          case "vehicles":
            info = store.infoVehicles?.[parseInt(id) - 1];
            break;
          default:
            info = null;
            break;
        }
        setInfoDetails(info);  // Setear los detalles específicos de 'info'
      }
    };

    fetchItemDetails();  // Llamar a la función para cargar los detalles
  }, [id, type, store]);

  if (!itemDetails || !infoDetails) return <div>Loading...</div>;  // Mostrar "Loading..." mientras los datos se cargan

  return (
    <div className="descriptionContainer hero flex-column">
      <div className="imageSection">
        <img
          src={store.url}  // Asegúrate de que 'store.url' es la imagen correcta
          className="imgCharacter"
          alt={itemDetails.name || itemDetails.title}
        />
      </div>

      <div className="descriptionHeader">
        <h1>{itemDetails.name || itemDetails.title}</h1>
        <p className="subTitle">
          {itemDetails.birth_year ||
            itemDetails.climate ||
            itemDetails.vehicle_class ||
            itemDetails.classification ||
            ""}
        </p>
      </div>

      <div className="detailsSection">
        <table className="detailsTable">
          <tbody>
            {type === "people" && (
              <>
                <tr><td><strong>Name:</strong></td><td>{itemDetails.name}</td></tr>
                <tr><td><strong>Gender:</strong></td><td>{infoDetails.gender}</td></tr>
                <tr><td><strong>Eye Color:</strong></td><td>{infoDetails.eye_color}</td></tr>
                <tr><td><strong>Hair Color:</strong></td><td>{infoDetails.hair_color}</td></tr>
                <tr><td><strong>Height:</strong></td><td>{infoDetails.height}</td></tr>
                <tr><td><strong>Mass:</strong></td><td>{infoDetails.mass}</td></tr>
              </>
            )}
            {type === "planets" && (
              <>
                <tr><td><strong>Name:</strong></td><td>{itemDetails.name}</td></tr>
                <tr><td><strong>Climate:</strong></td><td>{infoDetails.climate}</td></tr>
                <tr><td><strong>Population:</strong></td><td>{infoDetails.population}</td></tr>
                <tr><td><strong>Orbital Period:</strong></td><td>{infoDetails.orbital_period}</td></tr>
                <tr><td><strong>Rotation Period:</strong></td><td>{infoDetails.rotation_period}</td></tr>
                <tr><td><strong>Diameter:</strong></td><td>{infoDetails.diameter}</td></tr>
              </>
            )}
            {/* Más casos de tipo 'vehicles', 'species', 'films', etc. */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Description;
