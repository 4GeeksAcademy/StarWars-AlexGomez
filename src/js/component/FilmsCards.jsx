import React, { useEffect, useContext, useState } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";

const FilmsCards = ({ data }) => {
  const { store, actions } = useContext(Context);
  const infoFilms = store.infoFilms;
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (store.films.length === 0) {
      actions.getData("films");
    }
  }, [store.films, actions]);

  const groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedData.push(data.slice(i, i + 3));
  }

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="">
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
      {width < 800 ? (
        <div style={{ width: { width } }} className="carousel-inner">
          {data.map((item, index) => (
            <div
              key={item.uid}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <Card
                imgIdF={item.uid}
                type="films"
                title={infoFilms[index]?.title}
                episode_id={infoFilms[index]?.episode_id}
                opening_crawl={infoFilms[index]?.opening_crawl}
                director={infoFilms[index]?.director}
                producer={infoFilms[index]?.producer}
                release_date={infoFilms[index]?.release_date}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="carousel-inner">
          {groupedData.map((group, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
            >
              <div className="row">
                {group.map((item, index) => (
                  <div key={index} className="col-12 col-lg-4 mb-3">
                    <Card
                      imgIdF={item.uid}
                      type="films"
                      title={infoFilms[index]?.title}
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
      )}
    </div>
  );
};

export default FilmsCards;
