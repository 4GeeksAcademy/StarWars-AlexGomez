import React from "react";
import menu from "../../img/menu.png";
const ImageMapper = {
    people: "characters",
    planets: "planets",
    vehicles: "vehicles"
  };
  
  const ImageComponent = ({ type, status, id, aux}) => {
    if(type=="planets" && id==1){id=5; }

    const imageType = ImageMapper[type]; 
    let imageUrl = `https://starwars-visualguide.com/assets/img/${imageType}/${id}.jpg`;

    if (!status) {
        imageUrl=menu; 
    }

    return (
        
      <img   src={imageUrl} className= { !aux? "card-img-top shortDimen":"card-img-top highDimen"} alt={type} />
    );
  };
  
  export default ImageComponent;
  