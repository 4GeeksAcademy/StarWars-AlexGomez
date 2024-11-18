import React, { useContext,useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

const VehiclesCard = ({ data }) => {
  const randomcars = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
  const { store } = useContext(Context);
  const [width, setWidth] = useState(window.innerWidth);
  const infoVehicles = store.infoVehicles;
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
      <div className="col-sm-12 col-md-6 col-lg-12 text-right">
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
                type="vehicles"
                title={item.name}
                id={item.uid}
                model={infoVehicles[index]?.model}
                vehicle_class={infoVehicles[index]?.vehicle_class}
                manufacturer={infoVehicles[index]?.manufacturer}
                cost_in_credits={infoVehicles[index]?.cost_in_credits}
                length={infoVehicles[index]?.length}
                crew={infoVehicles[index]?.crew}
                passengers={infoVehicles[index]?.passengers}
                cargo_capacity={infoVehicles[index]?.cargo_capacity}
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
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 card-container"
                >
                  <Card
                    imgIdc={item.uid}
                    type="vehicles"
                    title={item.name}
                    id={item.uid}
                    model={infoVehicles[index]?.model}
                    vehicle_class={infoVehicles[index]?.vehicle_class}
                    manufacturer={infoVehicles[index]?.manufacturer}
                    cost_in_credits={infoVehicles[index]?.cost_in_credits}
                    length={infoVehicles[index]?.length}
                    crew={infoVehicles[index]?.crew}
                    passengers={infoVehicles[index]?.passengers}
                    cargo_capacity={infoVehicles[index]?.cargo_capacity}
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

export default VehiclesCard;
