import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PeopleCards from "./PeopleCards.jsx";
import PlanetsCards from "./PlanetsCards.jsx";
import FilmsCards from "./FilmsCards.jsx";
import StarshipsCards from "./StarshipsCard.jsx";
import VehiclesCards from "./VehiclesCard.jsx";
import SpeciesCard from "./SpeciesCard.jsx";
import Filter from "./Filter.jsx";

export const Cards = () => {
  const { store } = useContext(Context);
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("people");

  useEffect(() => {
    const types = [
      "films",
      "people",
      "planets",
      "species",
      "starships",
      "vehicles",
      "filter",
    ];
    const newType = types[store.index] || "people";
    setType(newType);
  }, [store.index]);

  useEffect(() => {
    if (store[type]) {
      setCardsData(store[type]);
      setLoading(false);
    }
  }, [store, type]);

  const renderLoading = () => (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );

  const renderCards = () => {
    if (loading) return renderLoading();

    if (cardsData.length === 0) return <p>No data available for {type}</p>;

    switch (type) {
      case "people":
        return <PeopleCards data={cardsData} />;
      case "planets":
        return <PlanetsCards data={cardsData} />;
      case "films":
        return <FilmsCards data={cardsData} />;
      case "species":
        return <SpeciesCard data={cardsData} />;
      case "starships":
        return <StarshipsCards data={cardsData} />;
      case "vehicles":
        return <VehiclesCards data={cardsData} />;
      case "filter":
        return <Filter />;
      default:
        return null;
    }
  };

  return (
  
      <section className="cards_right pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12">
              <h3 className="mb-3">
                {type === "people" ? "Characters" : type}
              </h3>
            </div>
          </div>
          <div className="row">{renderCards()}</div>
        </div>
      </section>
    
  );
};
