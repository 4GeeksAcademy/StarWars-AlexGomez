import React from "react";

const CardComponent = ({ title, type, properties }) => {
  const {
    birth_year = "",
    height = "",
    hair_color = "",
    eye_color = "",
    gender = "",
  } = properties;

  return (
    <div className="card">
      <h5 className="card-title">{title}</h5>
      <ul className="card-details">
        {type === "people" && (
          <>
            <li>Birth Year: {birth_year}</li>
            <li>Height: {height}</li>
            <li>Hair Color: {hair_color}</li>
            <li>Eye Color: {eye_color}</li>
            <li>Gender: {gender}</li>
          </>
        )}
        {/* Agrega detalles adicionales basados en `type` si es necesario */}
      </ul>
    </div>
  );
};

export default CardComponent;
