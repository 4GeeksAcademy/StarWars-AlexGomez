import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Description = () => {
  const { store } = useContext(Context);
  const { type, id,uid } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [infoDetails, setInfoDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      let item = store[type]?.find((item) => item.uid === id) || null;
      if (item) {
        setItemDetails(item);
        let info;
        switch (type) {
          case "people":
            info = store.infoPeople?.[parseInt(id - 1)];
            break;
          case "planets":
            info = store.infoPlanets?.[parseInt(id - 1)];
            break;
          case "films":
            info = store.infoFilms?.[parseInt(id - 1)];
            break;
          case "species":
            info = store.infoSpecies?.[parseInt(id - 1)];
            break;
          case "starships":
            info = store.infoStarships?.[parseInt(id - 1)];            
            break;
          case "vehicles":
            info = store.infoVehicles?.[parseInt(id - 1)];
            break;
          default:
            info = null;
            break;
        }
        setInfoDetails(info);
      }
    };

    fetchItemDetails();
  }, [id, type, store]);

  if (!itemDetails || !infoDetails) return <div>Loading...</div>;

  return (
    <div className="descriptionContainer hero flex-column">
      <div className="imageSection">
        <img
          src={store.url}
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
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>{itemDetails.name}</td>
                </tr>
                <tr>
                  <td><strong>Gender:</strong></td>
                  <td>{infoDetails.gender}</td>
                </tr>
                <tr>
                  <td><strong>Eye Color:</strong></td>
                  <td>{infoDetails.eye_color}</td>
                </tr>
                <tr>
                  <td><strong>Hair Color:</strong></td>
                  <td>{infoDetails.hair_color}</td>
                </tr>
                <tr>
                  <td><strong>Height:</strong></td>
                  <td>{infoDetails.height}</td>
                </tr>
                <tr>
                  <td><strong>Mass:</strong></td>
                  <td>{infoDetails.mass}</td>
                </tr>
              </>
            )}
            {type === "planets" && (
              <>
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>{itemDetails.name}</td>
                </tr>
                <tr>
                  <td><strong>Climate:</strong></td>
                  <td>{infoDetails.climate}</td>
                </tr>
                <tr>
                  <td><strong>Population:</strong></td>
                  <td>{infoDetails.population}</td>
                </tr>
                <tr>
                  <td><strong>Orbital Period:</strong></td>
                  <td>{infoDetails.orbital_period}</td>
                </tr>
                <tr>
                  <td><strong>Rotation Period:</strong></td>
                  <td>{infoDetails.rotation_period}</td>
                </tr>
                <tr>
                  <td><strong>Diameter:</strong></td>
                  <td>{infoDetails.diameter}</td>
                </tr>
                <tr>
                  <td><strong>Gravity:</strong></td>
                  <td>{infoDetails.gravity}</td>
                </tr>
                <tr>
                  <td><strong>Surface Water:</strong></td>
                  <td>{infoDetails.surface_water}</td>
                </tr>
                <tr>
                  <td><strong>Terrain:</strong></td>
                  <td>{infoDetails.terrain}</td>
                </tr>
              </>
            )}
            {type === "vehicles" && (
              <>
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>{itemDetails.name}</td>
                </tr>
                <tr>
                  <td><strong>Model:</strong></td>
                  <td>{infoDetails.model}</td>
                </tr>
                <tr>
                  <td><strong>Manufacturer:</strong></td>
                  <td>{infoDetails.manufacturer}</td>
                </tr>
                <tr>
                  <td><strong>Crew:</strong></td>
                  <td>{infoDetails.crew}</td>
                </tr>
                <tr>
                  <td><strong>Cargo Capacity:</strong></td>
                  <td>{infoDetails.cargo_capacity}</td>
                </tr>
                <tr>
                  <td><strong>Cost:</strong></td>
                  <td>{infoDetails.cost_in_credits}</td>
                </tr>
                <tr>
                  <td><strong>Max Speed:</strong></td>
                  <td>{infoDetails.max_atmosphering_speed}</td>
                </tr>
                <tr>
                  <td><strong>Passengers:</strong></td>
                  <td>{infoDetails.passengers}</td>
                </tr>
                <tr>
                  <td><strong>Vehicle Class:</strong></td>
                  <td>{infoDetails.vehicle_class}</td>
                </tr>
                <tr>
                  <td><strong>Consumables:</strong></td>
                  <td>{infoDetails.consumables}</td>
                </tr>
                <tr>
                  <td><strong>Length:</strong></td>
                  <td>{infoDetails.length}</td>
                </tr>
              </>
            )}
            {type === "species" && (
              <>
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>{itemDetails.name}</td>
                </tr>
                <tr>
                  <td><strong>Classification:</strong></td>
                  <td>{infoDetails.classification}</td>
                </tr>
                <tr>
                  <td><strong>Designation:</strong></td>
                  <td>{infoDetails.designation}</td>
                </tr>
                <tr>
                  <td><strong>Language:</strong></td>
                  <td>{infoDetails.language}</td>
                </tr>
                <tr>
                  <td><strong>Average Height:</strong></td>
                  <td>{infoDetails.average_height}</td>
                </tr>
                <tr>
                  <td><strong>Average Lifespan:</strong></td>
                  <td>{infoDetails.average_lifespan}</td>
                </tr>
                <tr>
                  <td><strong>Eye Colors:</strong></td>
                  <td>{infoDetails.eye_colors}</td>
                </tr>
                <tr>
                  <td><strong>Hair Colors:</strong></td>
                  <td>{infoDetails.hair_colors}</td>
                </tr>
              </>
            )}
            {type === "starships" && (
              <>
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>{itemDetails.name}</td>
                </tr>
                <tr>
                  <td><strong>Model:</strong></td>
                  <td>{infoDetails.model}</td>
                </tr>
                <tr>
                  <td><strong>Cost:</strong></td>
                  <td>{infoDetails.cost_in_credits}</td>
                </tr>
                <tr>
                  <td><strong>Length:</strong></td>
                  <td>{infoDetails.length}</td>
                </tr>
                <tr>
                  <td><strong>Max Speed:</strong></td>
                  <td>{infoDetails.max_atmosphering_speed}</td>
                </tr>
                <tr>
                  <td><strong>Crew:</strong></td>
                  <td>{infoDetails.crew}</td>
                </tr>
                <tr>
                  <td><strong>Passengers:</strong></td>
                  <td>{infoDetails.passengers}</td>
                </tr>
                <tr>
                  <td><strong>Cargo Capacity:</strong></td>
                  <td>{infoDetails.cargo_capacity}</td>
                </tr>
                <tr>
                  <td><strong>Consumables:</strong></td>
                  <td>{infoDetails.consumables}</td>
                </tr>
                <tr>
                  <td><strong>Hyperdrive Rating:</strong></td>
                  <td>{infoDetails.hyperdrive_rating}</td>
                </tr>
                <tr>
                  <td><strong>MGLT:</strong></td>
                  <td>{infoDetails.MGLT}</td>
                </tr>
                <tr>
                  <td><strong>Starship Class:</strong></td>
                  <td>{infoDetails.starship_class}</td>
                </tr>
              </>
            )}
            {type === "films" && (
              <>
                <tr>
                  <td><strong>Title:</strong></td>
                  <td>{infoDetails.title}</td>
                </tr>
                <tr>
                  <td><strong>Director:</strong></td>
                  <td>{infoDetails.director}</td>
                </tr>
                <tr>
                  <td><strong>Producer:</strong></td>
                  <td>{infoDetails.producer}</td>
                </tr>
                <tr>
                  <td><strong>Release Date:</strong></td>
                  <td>{infoDetails.release_date}</td>
                </tr>
                <tr>
                  <td><strong>Episode:</strong></td>
                  <td>{infoDetails.episode_id}</td>
                </tr>
                <tr>
                  <td><strong>Opening Crawl:</strong></td>
                  <td>{infoDetails.opening_crawl}</td>
                </tr>
                <tr>
                  <td><strong>Characters:</strong></td>
                  <td>{infoDetails.characters}</td>
                </tr>
                <tr>
                  <td><strong>Planets:</strong></td>
                  <td>{infoDetails.planets}</td>
                </tr>
                <tr>
                  <td><strong>Starships:</strong></td>
                  <td>{infoDetails.starships}</td>
                </tr>
                <tr>
                  <td><strong>Vehicles:</strong></td>
                  <td>{infoDetails.vehicles}</td>
                </tr>
                <tr>
                  <td><strong>Species:</strong></td>
                  <td>{infoDetails.species}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      <button className="btnDescription" onClick={() => alert("NO AVAILABLE FOR THE MOMENT!!!")}>Watch de Video of {itemDetails.name}</button>
      </div>
    </div>
  );
};

export default Description;