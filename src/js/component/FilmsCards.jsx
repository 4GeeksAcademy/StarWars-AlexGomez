import React,{useContext} from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";

const FilmsCards = ({ data }) => {
  const {store} = useContext(Context);
  const infoFilms = store.infoFilms;
  console.log(infoFilms);
  
  return (
    <div className="row">
      {data.map((item, idx) => (
        <div key={idx} className="col-12 col-lg-4 mb-3">
          <Card
            title={item.title}
            director={item.director}
            producer={item.producer}
            release_date={item.release_date}
          /> 
        </div>
      ))}
    </div>
  );
};


export default FilmsCards;
