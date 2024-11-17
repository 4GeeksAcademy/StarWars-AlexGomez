import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/Icon.png";
import Btn from "./btn.jsx";

export const Card = (props) => {
  const nave = [5, 9, 10, 11, 12, 13, 15, 5, 9, 10];
  const car = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
  const Films = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4];
  const { store, actions } = useContext(Context);
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    const defaultImage = `https://starwars-visualguide.com/assets/img/${
      props.type === "people" ? "characters" : props.type
    }/6.jpg`;

    let imageUrl = "";
    if (props.type === "starships") {
      let cc = nave[props.idStar - 1];

      imageUrl = `https://starwars-visualguide.com/assets/img/starships/${cc}.jpg`;
    } else if (props.type === "films") {
      imageUrl = `https://starwars-visualguide.com/assets/img/films/${
        Films[props.imgIdF]
      }.jpg`;
    } else if (props.type === "planets") {
      imageUrl = `https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`;
    } else if (props.type === "species") {
      imageUrl = `https://starwars-visualguide.com/assets/img/species/${props.id}.jpg`;
    } else if (props.type === "vehicles") {
      imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${
        car[props.imgIdc - 1]
      }.jpg`;
    } else if (props.type === "people") {
      imageUrl = `https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`;
    }

    const img = new Image();
    img.onload = () => setImagen(imageUrl);
    img.onerror = () => setImagen(defaultImage);
    img.src = imageUrl;
  }, [props.id, props.type, props.imgId, props.imgIdc]);

  const handleClick = (name) => {
    const updatedFavorites = store.favorites.includes(name)
      ? store.favorites.filter((favorite) => favorite !== name)
      : [...store.favorites, name];
    actions.addFavorite(updatedFavorites);
  };

  return (
    <div className="cards">
      <div className="card-header">
        <img className="img" src={logo} alt="Logo" />
        <div>
          <p className={props.type === "starships" ? "name" : "name"}>
            {props.title}
          </p>
          {props.type === "people" && (
            <p className="rank">{props.birth_year}</p>
          )}
          {props.type === "planets" && <p className="rank">{props.climate}</p>}
          {props.type === "vehicles" && (
            <p className="rank">{props.vehicle_class}</p>
          )}
          {props.type === "species" && (
            <p className="rank">{props.classification}</p>
          )}
          {props.type === "starships" && (
            <small className="rank">{props.model}</small>
          )}
          {props.type === "films" && (
            <small className="rank">{props.director}</small>
          )}
        </div>
      </div>

      {[
        "people",
        "films",
        "planets",
        "vehicles",
        "species",
        "starships",
      ].includes(props.type) && (
        <>
          <img
            id="imag"
            src={imagen}
            className="img img-character shortDimen"
            alt={props.type}
          />
          <p className="position">{"Character"}</p>
          <div className="aboutCard">
            <ul className="p-0">
              {props.type === "people" && (
                <>
                  <li>Height: {props.height}</li>
                  <li>Eye Color: {props.eye_color}</li>
                  <li>Hair Color: {props.hair_color}</li>
                  <li>Gender: {props.gender}</li>
                </>
              )}
              {props.type === "planets" && (
                <>
                  <li>Population: {props.population}</li>
                  <li className="overflow-hidden">Terrain: {props.terrain}</li>
                  <li>Diameter: {props.diameter}</li>
                </>
              )}
              {props.type === "vehicles" && (
                <>
                  <li>Crew: {props.crew}</li>
                  <li>Cost: {props.cost_in_credits}</li>
                  <li>Model: {props.model}</li>
                  <li>Cargo Capacity: {props.cargo_capacity}</li>
                </>
              )}
              {props.type === "species" && (
                <>
                  <li>Classification: {props.classification}</li>
                  <li>Designation: {props.designation}</li>
                  <li>Language: {props.language}</li>
                </>
              )}
              {props.type === "starships" && (
                <>
                  <li>Consumables: {props.consumables}</li>
                  <li>Cost: {props.cost_in_credits}</li>
                  <li>Length: {props.length}</li>
                  <li>Max Speed: {props.max_atmosphering_speed}</li>
                </>
              )}

              {props.type === "films" && (
                <>
                  <li>Director: {props.director}</li>
                  <li>Producer: {props.producer}</li>
                  <li>Release Date: {props.release_date}</li>
                  <li>Episode: {props.episode_id}</li>
                </>
              )}
            </ul>

            <Btn
              id={
                props.type === "starships"
                  ? props.idStar
                  : props.type === "films"
                  ? props.imgIdF
                  : props.id
              }
              type={props.type}
              url={imagen}
              title={props.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
