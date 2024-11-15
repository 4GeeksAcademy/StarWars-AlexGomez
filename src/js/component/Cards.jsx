import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

export const Cards = () => {
  const { store } = useContext(Context);
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("people");
console.log("https://starwars-visualguide.com/assets/img/planets/1.jpg");

  
  useEffect(() => {
    switch (store.index) {
      case 0:
        setType("films");
        break;
      case 1:
        setType("people");
        break;
      case 2:
        setType("planets");
        break;
      case 3:
        setType("species");
        break;
     case 4:
      setType("starships");
            break;
     case 5:
       setType("vehicles");
           break;
      default:
        setType("people");
        break;
    }
  }, [store.index]);

  useEffect(() => {
    setCardsData(store[type]);
    setLoading(false);
  }, [store[type]]);

  const chunkCards = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const groupedCards = chunkCards(cardsData, 3);

  return (
    <div className="cards_right">
      <section className="pt-5 pb-5">
        <div className="container">
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
                        
                            
                          <Card
                            title={item.title || item.name}
                            type={type}
                            key={item.uid}
                            name={item.name}
                            id={item.uid}
                            birth_year={item.birth_year || ""}
                            height={item.height || ""}
                            hair_color={item.hair_color || ""}
                            eye_color={item.eye_color || ""}
                            gender={item.gender || ""}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
