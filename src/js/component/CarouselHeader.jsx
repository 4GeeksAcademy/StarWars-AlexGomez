import React from "react";

const CarouselHeader = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h3 className="mb-3">Carousel Cards</h3>
      </div>
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
    </div>
  );
};

export default CarouselHeader;
