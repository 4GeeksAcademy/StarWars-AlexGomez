import React,{useContext} from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";

const StarshipsCard = ({ data }) => {
 
  
  let cc=0;
  const nave = [5, 9, 10, 11, 12, 13, 15];
  const { store } = useContext(Context);
  const infoStarships = store.infoStarships;
  
  const groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedData.push(data.slice(i, i + 3));
  }

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      
    
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
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <div className="row">
              {group.map((item, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 card-container"
                >
                
                  <Card
                    type="starships"
                    title={item.name}
                    idStar={item.uid}
                    model={infoStarships[index]?.model}
                    manufacturer={infoStarships[index]?.manufacturer}
                    cost_in_credits={infoStarships[index]?.cost_in_credits}
                    length={infoStarships[index]?.length}
                    max_atmosphering_speed={infoStarships[index]?.max_atmosphering_speed}
                    crew={infoStarships[index]?.crew}
                    passengers={infoStarships[index]?.passengers}
                    cargo_capacity={infoStarships[index]?.cargo_capacity}
                    consumables={infoStarships[index]?.consumables}
                    hyperdrive_rating={infoStarships[index]?.hyperdrive_rating}
                    MGLT={infoStarships[index]?.MGLT}
                    starship_class={infoStarships[index]?.starship_class}
                  />
                </div>
              ))}
            </div>
          </div>
      ))} { cc=cc+1}
      </div>
    </div>
  );
};

export default StarshipsCard;