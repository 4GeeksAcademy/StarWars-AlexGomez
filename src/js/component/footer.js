import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Footer = () => {
  const { store, actions } = useContext(Context);

  return (
    <footer className="footer mt-auto py-3 text-center">
      <p>
        Push there to change the pictures{" "} 
        <i 
          style={{ cursor: "pointer" }} 
          className="fa fa-heart text-primary" 
          onClick={() => actions.GlobalChange(store.globalChange)} 
        /> {"  "}<br />
        &copy;{" "}Alex Salazar 2024!
      </p>
    </footer>
  );
};
