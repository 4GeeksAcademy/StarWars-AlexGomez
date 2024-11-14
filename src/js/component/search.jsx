import React, { useState, useContext } from "react";
import { Context } from '../store/appContext';

const Search = () => {
  const { store, actions } = useContext(Context);
  const [searchInfo, setsearchInfo] = useState("");
  const [selectedType, setSelectedType] = useState("People");


  const handleChange = (e) => {
    const { value } = e.target;
    setsearchInfo(value);
    filterData(value, selectedType);
  };

  const handleSelectChange = (e) => {
   
    const { value } = e.target;
    setSelectedType(value);
    filterData(searchInfo, value);
  };

  const filterData = (searchInfo, selectedType) => {

    let dataToFilter = [];

    if (selectedType === "People") {
      dataToFilter = store.people;
    } else if (selectedType === "Planets") {
      dataToFilter = store.planets;
    } else if (selectedType === "Vehicles") {
      dataToFilter = store.vehicles;
    }
    
    
    const filtered = dataToFilter.filter((item) =>
      item.name.toLowerCase().includes(searchInfo.toLowerCase())
    );
    console.log(selectedType,filtered.name);
    if (searchInfo === "") {
      return actions.search(JSON.parse(localStorage.getItem(selectedType.toLowerCase())),selectedType);
    }

    actions.search(filtered,selectedType);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="form-group d-flex align-items-end">
            <label className="text-center w-100 mx-auto fs-1 text-primary" htmlFor="search">Search
            <input
              type="text"
              className="form-control"
              id="search"
              value={searchInfo}
              onChange={handleChange}
            /></label>
           
            <select 
              className="form-control mx-2 w-25 h-25"
              id="Selectype"
              value={selectedType}
              onChange={handleSelectChange}
            > 
        
              <option value="People" >People</option>
              <option value="Planets" >Planets</option>
              <option value="Vehicles">Vehicles</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
