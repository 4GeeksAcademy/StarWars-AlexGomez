import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

export const People = () => {
  const { store } = useContext(Context);
  const people = store.people;
  const character = store.infopeople;
  const globalChange = store.globalChange;

 
  return (
    <>	
    <h2 className="ms-5 text-danger mt-5 pt-5">Characters</h2>
    <div className={globalChange
      ?"cuadrado d-flex high justify-content-around mx-3 mb-3 pb-4"
      :"cuadrado d-flex justify-content-around m-3"}>
	
      {people.map((item, index) => (
        <Card
         status={globalChange}
          type="people"
          key={index}
          name={item.name}
          id={item.uid}
          height={character[index]?.height}
          hair_color={character[index]?.hair_color}
          eye_color={character[index]?.eye_color}
        />
      ))}
    </div></>
  );
};
