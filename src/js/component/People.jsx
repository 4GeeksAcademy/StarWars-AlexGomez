import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";


export const People = () => {
  const { store } = useContext(Context);
  const people = store["people"];
  const infoPeople = store.infoPeople;


 {/* <div className="hero"><h1>Characters</h1></div> */}
  return (
    <>
     <div className=" mx-5 ">
        <div className="hero"><h1>Characters</h1></div>
        
        <div
          className={
            false
              ? "cuadrado d-flex high justify-content-around mx-3 mb-3 pb-4"
              : "cuadrado d-flex justify-content-around m-3"
          }
        >
                {people && infoPeople && people.map((item, index) => (
                 infoPeople[index] && (
           <Card

                type="people"
                key={index}
                name={item.name}
                id={item.uid}
                birth_year={infoPeople[index]?.birth_year}
                height={infoPeople[index]?.height}
                hair_color={infoPeople[index]?.hair_color}
                eye_color={infoPeople[index]?.eye_color}
                gender={infoPeople[index]?.gender}
              />
            )
          ))}
        </div>
      </div>
      
    </>
  );
};
