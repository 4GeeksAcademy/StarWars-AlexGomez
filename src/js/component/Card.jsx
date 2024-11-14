import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ImageComponent  from "./ImageComponent.js";

export const Card = (props) => {
  const { store, actions } = useContext(Context);

  const [like, setLike] = useState(false);

  const handleClick = (name) => {
    setLike(!like);
    if (!like) {
        if (!store.favorites.includes(name)) {
              const updatedFavorites = [...store.favorites, name]; 

               actions.Favorite({ favorites: updatedFavorites });
          }
    } else {

        const favorites = store.favorites.filter((favorite) => favorite !== name);
       
        actions.Favorite({ favorites: favorites });
    }
  };

  return (
    <div className="contenido card mb-3 mb-sm-0">
      <ImageComponent type={props.type} status={props.status} id={props.id} />
      <div className="card-body">
      
        <h4 className="card-title text-start m-3">{props.name}</h4>
        <div className="card-text text-start m-3 lh-1">
        {props.type === "people" ?<>
          <p className="lh-1">Height: <span>{props.height || 'N/A'}</span></p>
          <p className="lh-1">Hair Color: <span>{props.hair_color || 'N/A'}</span></p>
          <p className="lh-1">Eye Color: <span>{props.eye_color || 'N/A'}</span></p> </>  
          : props.type === "planets"? <>
           <p className="lh-1">Population: <span>{props.height || 'N/A'}</span></p>
           <p  className="lh-1 line-break">Terrain: <span style={{maxWidth:"80px"}}>{props.hair_color || 'N/A'}</span></p>
          </>:<>
            <p className="lh-1">Population: <span>{props.height || 'N/A'}</span></p>
            <p  className="lh-1 line-break">Terrain: <span style={{maxWidth:"80px"}}>{props.hair_color || 'N/A'}</span></p>
           </>}
         
        </div>
        <div className="d-flex justify-content-around">
          <Link to={{ pathname: `/Description/${props.id}` }} className="btn btn-outline-primary fw-bold my-2" onClick={() => { store.idDescription = props.id }}>
            Learn more!
          </Link>
          <button className="text-bg-primary d-inline-block mt-2" onClick={() => handleClick(props.name)}>
            {store.favorites.includes(props.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart byellow cyellow"></i>}
           
          </button>
        </div>
      </div>
    </div>
  );
};
