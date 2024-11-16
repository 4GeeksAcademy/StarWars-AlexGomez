import React, { useEffect, useContext } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";

const FilmsCards = ({ data }) => {
  const { store, actions } = useContext(Context);
  const infoFilms = store.infoFilms;

  useEffect(() => {
    // Aquí puedes cargar la categoría de los films si aún no se han cargado
    if (store.films.length === 0) {
      actions.getData("films");
    }
  }, [store.films, actions]);

  // Agrupar los datos en sets de 3 para el carrusel
  const groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedData.push(data.slice(i, i + 3));
  }

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/* Botones de navegación */}
      <div className="col-6 text-right">
        <button
          className="btn-next btn btn-secondary mb-3 mr-1"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <i className="fa fa-arrow-left"></i>
        </button>
        <button
          className="btn btn-secondary mb-3 btn-next"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>

      {/* Carrusel Inner */}
      <div className="carousel-inner">
        {groupedData.map((group, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <div className="row">
              {group.map((item, index) => (
                <div key={index} className="col-12 col-lg-4 mb-3">
                  <Card
                    imgIdF={item.uid}
                    type="films"
                    title={item.title}
                    episode_id={infoFilms[index]?.episode_id}
                    opening_crawl={infoFilms[index]?.opening_crawl}
                    director={infoFilms[index]?.director}
                    producer={infoFilms[index]?.producer}
                    release_date={infoFilms[index]?.release_date}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmsCards;
