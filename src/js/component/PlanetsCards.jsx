import React, { useContext } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";

const PlanetsCard = ({ data }) => {
  const { store } = useContext(Context);
  const infoPlanets = store.infoPlanets;
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

      <div className="carousel-inner">
        {groupedData.map((group, idx) => (
          <div
            key={idx}
            className={`carousel-item ${idx === 0 ? "active" : ""}`}
          >
            <div className="row">
              {group.map((item, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 card-container"
                >
                  <Card
                    type="planets"
                    title={item.name}
                    id={item.uid}
                    climate={infoPlanets[index]?.climate}
                    population={infoPlanets[index]?.population}
                    terrain={infoPlanets[index]?.terrain}
                    diameter={infoPlanets[index]?.diameter}
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

export default PlanetsCard;
