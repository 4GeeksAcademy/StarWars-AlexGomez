import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

export const Planets = () => {
  const { store } = useContext(Context);
  const planets = store.planets || []; 
  const infoplanets = store.infoplaneta || []; 
  const globalChange = store.globalChange;

  return (
    <>
      <h2 className=" ms-5 text-danger mt-5 pt-5">Planets</h2>

      <div
        className={
          globalChange
            ? "cuadrado d-flex high justify-content-around m-3"
            : "cuadrado d-flex justify-content-around m-3"
        }
      >
        {planets.map((item, index) => (
          <Card
            status={globalChange}
            type="planets"
            key={index}
            name={item.name}
            id={item.uid}
            height={infoplanets[index]?.population || "n/a"} 
            hair_color={infoplanets[index]?.terrain || "n/a"} 
          />
        ))}
      </div>
    </>
  );
};
