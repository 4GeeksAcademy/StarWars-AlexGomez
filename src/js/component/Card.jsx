import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import coheteU from "../../img/coheteU.png";
import cohete from "../../img/coheteLIKE.png";
import logo from "../../img/Icon.png";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const nave = [5, 9, 10, 11, 12, 13, 15];
  const randomcars = [4,6,7,8,14,16,18,19,20,24];
  let randomNave = nave[Math.floor(Math.random() * nave.length)];
  let randomCar = randomcars[Math.floor(Math.random() * randomcars.length)];

  const [imagen, setImagen] = useState("");


  const handleClick = (name) => {
   
    if (!store.favorites.includes(name)) {
  
      const updatedFavorites = [...store.favorites, name];
      actions.addFavorite(updatedFavorites);
    } else {
      
      const updatedFavorites = store.favorites.filter((favorite) => favorite !== name);
      actions.addFavorite(updatedFavorites);
    }
  };

  useEffect(() => {
    const img = new Image();
    const defaultImage = `https://starwars-visualguide.com/assets/img/${
      props.type === "people" ? "characters" : props.type
    }/${props.type=="starships"?randomNave:randomCar}.jpg`; 
    const imageUrl = `https://starwars-visualguide.com/assets/img/${
      props.type === "people" ? "characters" : props.type
    }/${props.id}.jpg`; 

    img.onload = () => setImagen(imageUrl);
    img.onerror = () => setImagen(defaultImage); 

    img.src = imageUrl; 
  }, [props.id, props.type]);

  return (
    <>
      <div className="cards">
        <div className="card-header">
          <img className="img" src={logo} alt="Logo" />
          <div>
              <p className={props.type === "starships"?"name":"name"}>{props.title}</p>
               {props.type === "people" ? (
              <p className="rank">{props.birth_year}</p>
            ) : props.type === "planets" ? (
              <p className="rank">{props.climate}</p>
            ) : props.type === "vehicles" ? (
              <p className="rank">{props.vehicle_class}</p>
            ) : props.type === "species" ? (
              <p className="rank">{props.classification}</p>
            ): props.type === "starships" ? (<>
              <small className="rank ">{props.model}</small>
            </>): null}
          </div>
        </div>

        <img id="imag" src={imagen} className="img img-character shortDimen" alt={props.type} />

        <p className="position">{"Character"}</p>
        <div className="aboutCard">
          <ul className="p-0">
            {props.type === "people" ? (
              <>
                <li>Height: {props.height}</li>
                <li>Eye Color: {props.eye_color}</li>
                <li>Hair Color: {props.hair_color}</li>
                <li>Gender: {props.gender}</li>
              </>
            ) : props.type === "planets" ? (
              <>
                <li>Population: {props.population}</li>
                <li className="overflow-hidden">Terrain: {props.terrain}</li>
                <li>Diameter: {props.diameter}</li>
              </>
            ) : props.type === "vehicles" ? (
              <>
                <li>Crew: {props.crew}</li>
                <li>Cost: {props.cost_in_credits}</li>
                <li>Model: {props.model}</li>
                <li>Cargo Capacity: {props.cargo_capacity}</li>
              </>
            ) : props.type === "species" ? (<>
              <li>Classification: {props.classification}</li>
              <li>Designation: {props.designation}</li>
              <li>Language: {props.language}</li>
            </>): props.type === "starships" ? (<>
              <li>Model: {props.title}</li>
              <li>Cost: {props.cost_in_credits}</li>
              <li>Length: {props.length}</li>
              <li>Max Speed: {props.max_atmosphering_speed}</li>
              
           
            </>) : null}
          </ul>

          <div className="d-flex justify-content-around footer_card">
            <Link to={{ pathname: `/Description/${props.id}` }} className="btn btn-outline-dark me-5 fw-bold my-2">
              Learn more!
            </Link>
            <button className="btnheart bgt mt-2" onClick={() => handleClick(props.title)}>
              {store.favorites.includes(props.title) ? (
                <>
                  <img className="likeIcon" src={cohete} alt="Liked" />
                  <svg className="svg-shadow" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="Capa_1" width="55" height="55" fill="#666" version="1.1" viewBox="0 0 471.701 471.701">
                    <path d="M433.601 67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7 13.6-92.4 38.3l-12.9 12.9-13.1-13.1c-24.7-24.7-57.6-38.4-92.5-38.4-34.8 0-67.6 13.6-92.2 38.2-24.7 24.7-38.3 57.5-38.2 92.4 0 34.9 13.7 67.6 38.4 92.3l187.8 187.8c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-3.9l188.2-187.5c24.7-24.7 38.3-57.5 38.3-92.4.1-34.9-13.4-67.7-38.1-92.4m-19.2 165.7-178.7 178-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3s10.7-53.7 30.3-73.2c19.5-19.5 45.5-30.3 73.1-30.3 27.7 0 53.8 10.8 73.4 30.4l22.6 22.6c5.3 5.3 13.8 5.3 19.1 0l22.4-22.4c19.6-19.6 45.7-30.4 73.3-30.4s53.6 10.8 73.2 30.3c19.6 19.6 30.3 45.6 30.3 73.3.1 27.7-10.7 53.7-30.3 73.3"></path>
                  </svg>
                </>
              ) : (
                <>
                  <img className="likeIcon" src={coheteU} alt="Not Liked" />
                  <svg className="svg-shadow" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="Capa_1" width="55" height="55" fill="#666" version="1.1" viewBox="0 0 471.701 471.701">
                    <path d="M433.601 67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7 13.6-92.4 38.3l-12.9 12.9-13.1-13.1c-24.7-24.7-57.6-38.4-92.5-38.4-34.8 0-67.6 13.6-92.2 38.2-24.7 24.7-38.3 57.5-38.2 92.4 0 34.9 13.7 67.6 38.4 92.3l187.8 187.8c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-3.9l188.2-187.5c24.7-24.7 38.3-57.5 38.3-92.4.1-34.9-13.4-67.7-38.1-92.4m-19.2 165.7-178.7 178-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3s10.7-53.7 30.3-73.2c19.5-19.5 45.5-30.3 73.1-30.3 27.7 0 53.8 10.8 73.4 30.4l22.6 22.6c5.3 5.3 13.8 5.3 19.1 0l22.4-22.4c19.6-19.6 45.7-30.4 73.3-30.4s53.6 10.8 73.2 30.3c19.6 19.6 30.3 45.6 30.3 73.3.1 27.7-10.7 53.7-30.3 73.3"></path>
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
