import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

const PeopleCards = ({ data }) => {
  const { store } = useContext(Context);
  const infoPeople = store.infoPeople;
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
      {  window.innerWidth < 800 ?
      <div className="carousel-inner">
        {data.map((item, index) => (
          <div
            key={item.uid}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <Card
              type="people"
              title={item.name}
              id={item.uid}
              birth_year={infoPeople[index]?.birth_year}
              height={infoPeople[index]?.height}
              hair_color={infoPeople[index]?.hair_color}
              eye_color={infoPeople[index]?.eye_color}
              gender={infoPeople[index]?.gender}
            />
          </div>
        ))}
      </div>:

      
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
                    type="people"
                    title={item.name}
                    id={item.uid}
                    birth_year={infoPeople[index]?.birth_year}
                    height={infoPeople[index]?.height}
                    hair_color={infoPeople[index]?.hair_color}
                    eye_color={infoPeople[index]?.eye_color}
                    gender={infoPeople[index]?.gender}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      }


    </div>
  );
};

export default PeopleCards;
