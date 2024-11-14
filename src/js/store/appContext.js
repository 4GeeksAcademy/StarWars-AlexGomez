import React, { useState, useEffect, createContext } from "react";
import getState from "./flux.js";
import fetchPeople from "../component/fetchPeople";
import fetchPlanets from "../component/fetchPlanets";
import fetchVehicles from "../component/fetchVehicles";

export const Context = createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState((prevState) => ({
            store: { ...prevState.store, ...updatedStore },
            actions: { ...prevState.actions },
          })),
      })
    );

    useEffect(() => {
      fetchPeople(setState, state);
      fetchPlanets(setState, state);
      fetchVehicles(setState, state);
    }, []);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;
