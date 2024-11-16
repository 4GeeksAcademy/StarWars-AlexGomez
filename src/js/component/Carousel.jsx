import React from "react";
import CardComponent from "./CardComponent";

const Carousel = ({ groupedCards, loading, type }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide col-12"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {loading ? (
          <div className="carousel-item active">
            <p>Loading...</p>
          </div>
        ) : (
          groupedCards.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row">
                {group.map((item, idx) => (
                  <div
                    key={idx}
                    className="col-12 col-lg-4 mb-3 card-container"
                  >
                    <CardComponent
                      title={item.title || item.name}
                      type={type}
                      id={item.uid}
                      properties={item}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Carousel;
