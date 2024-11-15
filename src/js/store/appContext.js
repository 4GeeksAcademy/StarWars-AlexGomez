import React, { useState, useEffect, createContext } from "react";
import getState from "./flux.js";
export const Context = createContext(null);

const injectContext = (PassedComponent) => {

  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
         setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions }
          })
      })
    );

    useEffect(() => {
      state.actions.fetchCategoryData("films");
      state.actions.fetchCategoryData("people");
      state.actions.fetchCategoryData("planets");
      state.actions.fetchCategoryData("species");
      state.actions.fetchCategoryData("starships");
      state.actions.fetchCategoryData("vehicles");
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
