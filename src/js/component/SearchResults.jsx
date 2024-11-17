import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const SearchResults = () => {
  const { store } = useContext(Context);

  // Obtener los resultados filtrados para cada tipo
  const filteredPeople = store.filteredPeople || [];
  const filteredVehicles = store.filteredVehicles || [];
  const filteredSpecies = store.filteredSpecies || [];
  const filteredPlanets = store.filteredPlanets || [];
  const filteredStarships = store.filteredStarships || [];
  const filteredFilms = store.filteredFilms || [];

  const renderList = (items, type) => {
    if (items.length === 0) {
      // return  <p>No results found for {type}</p>
      return null;
    }
    return (
      <div>
        <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> {/* Puedes agregar más detalles aquí según el tipo */}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="search-results ">
      {renderList(filteredPeople, 'People')}
      {renderList(filteredVehicles, 'Vehicles')}
      {renderList(filteredSpecies, 'Species')}
      {renderList(filteredPlanets, 'Planets')}
      {renderList(filteredStarships, 'Starships')}
      {renderList(filteredFilms, 'Films')}
    </div>
  );
};

export default SearchResults;
