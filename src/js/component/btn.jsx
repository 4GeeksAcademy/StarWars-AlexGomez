import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import coheteU from "../../img/coheteU.png";
import cohete from "../../img/coheteLIKE.png";

const btn = (props) => {
  const { store, actions } = useContext(Context);
  const handleClick = (name) => {
    const updatedFavorites = store.favorites.includes(name)
      ? store.favorites.filter((favorite) => favorite !== name)
      : [...store.favorites, name];
    actions.addFavorite(updatedFavorites);
    actions.setUrl(props.url);
    actions.SetdataNav(props.type, props.id, props.url);
  };
  return (
    <div className="d-flex justify-content-around footer_card">
      <Link
        onClick={() => actions.setUrl(props.url)}
        to={{ pathname: `/Description/${props.type}/${props.id}` }}
        className="btn btn-outline-dark me-5 fw-bold my-2"
      >
        Learn more!
      </Link>
      <button
        className="btnheart bgt mt-2"
        onClick={() => handleClick(props.title)}
      >
        {store.favorites.includes(props.title) ? (
          <>
            <img className="likeIcon" src={cohete} alt="Liked" />
            <svg
              className="svg-shadow"
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="#666"
              viewBox="0 0 471.701 471.701"
            >
              <path d="M433.601 67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7 13.6-92.4 38.3l-12.9 12.9-13.1-13.1c-24.7-24.7-57.6-38.4-92.5-38.4-34.8 0-67.6 13.6-92.2 38.2-24.7 24.7-38.3 57.5-38.2 92.4 0 34.9 13.7 67.6 38.4 92.3l187.8 187.8c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-3.9l188.2-187.5c24.7-24.7 38.3-57.5 38.3-92.4.1-34.9-13.4-67.7-38.1-92.4m-19.2 165.7-178.7 178-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3s10.7-53.7 30.3-73.2c19.5-19.5 45.5-30.3 73.1-30.3 27.7 0 53.8 10.8 73.4 30.4l22.6 22.6c5.3 5.3 13.8 5.3 19.1 0l22.4-22.4c19.6-19.6 45.7-30.4 73.3-30.4s53.6 10.8 73.2 30.3c19.6 19.6 30.3 45.6 30.3 73.3.1 27.7-10.7 53.7-30.3 73.3"></path>
            </svg>
          </>
        ) : (
          <>
            <img className="likeIcon" src={coheteU} alt="Not Liked" />
            <svg
              className="svg-shadow"
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="#666"
              viewBox="0 0 471.701 471.701"
            >
              <path d="M433.601 67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7 13.6-92.4 38.3l-12.9 12.9-13.1-13.1c-24.7-24.7-57.6-38.4-92.5-38.4-34.8 0-67.6 13.6-92.2 38.2-24.7 24.7-38.3 57.5-38.2 92.4 0 34.9 13.7 67.6 38.4 92.3l187.8 187.8c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-3.9l188.2-187.5c24.7-24.7 38.3-57.5 38.3-92.4.1-34.9-13.4-67.7-38.1-92.4m-19.2 165.7-178.7 178-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3s10.7-53.7 30.3-73.2c19.5-19.5 45.5-30.3 73.1-30.3 27.7 0 53.8 10.8 73.4 30.4l22.6 22.6c5.3 5.3 13.8 5.3 19.1 0l22.4-22.4c19.6-19.6 45.7-30.4 73.3-30.4s53.6 10.8 73.2 30.3c19.6 19.6 30.3 45.6 30.3 73.3.1 27.7-10.7 53.7-30.3 73.3"></path>
            </svg>
          </>
        )}
      </button>
    </div>
  );
};

export default btn;
