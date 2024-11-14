import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

export const Vehicles = () => {
    const { store } = useContext(Context);
    const vehicles = store.vehicles;
    const infoVehicles = store.infoVehicles;
    const globalChange = store.globalChange;



    return (
      <>
      <h2 className="text-danger ms-5 mt-5 pt-5">Vehicles</h2>
   
      <div className={globalChange
        ?"cuadrado d-flex high justify-content-around m-3"
        :"cuadrado d-flex justify-content-around m-3"}>
        
        {(infoVehicles.length === 0) ? (  <h1>There are no vehicles</h1> ) : 
        
        
        vehicles.map((item, index) => (
          <Card
          status={globalChange}
            type="vehicles"
            key={index}
            name={item.name}
            id={item.uid}
            height={infoVehicles[index]?.crew}
            hair_color={infoVehicles[index]?.model}
          />
        ))}
      </div>
      </>)
  };
  