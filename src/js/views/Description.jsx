import React, { useContext,useEffect,useState } from "react";
import { Context } from "../store/appContext";
import  ImageComponent  from "../component/ImageComponent";

export const Description = () => {

    const [planet, setPlanet] = useState({});
    const { store } = useContext(Context);
    const globalChange = store.globalChange;
    useEffect(() => {
                        fetch(`https://www.swapi.tech/api/planets/${store.idDescription}`)
                        .then((response) => {
                            if (!response.ok) throw new Error("La respuesta de la red no fue correcta (linea 12 description.jsx)");
                            return response.json();
                        })
                        .then((data) => setPlanet(data.result.properties))
                        .catch((err) => console.error(err));
                    }, []);

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-5 mx-auto">
                       <ImageComponent aux={true}  type="planets" status={globalChange} id={1} />        
                </div>
                <div className="col-md-5 text-center mx-auto">
                    <h2 className="text-center w-100  mx-auto px-auto">{planet.name}</h2>
                    <p className="m-3 px-3  text-center ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl nec urna convallis
                        dignissim. Nulla facilisi. Sed auctor, nulla nec ullamcorper placerat, enim massa posuere
                        ligula, non aliquam sapien purus a libero. Integer in ultricies nunc. Sed nec risus nec
                        libero ultrices cursus. Nullam sit amet nunc nec libero ultrices cursus. Nullam sit amet
                        nunc nec libero ultrices cursus. Nullam sit amet nunc nec libero ultrices cursus.
                    </p>
                </div>
            </div>
            <div>
                
                <hr className="border border-danger border-1 opacity-50 my-5 text-danger fw-bold  " />
            </div>
            <div className="row text-center text-danger">
                <div className="col-md-2">
                    <h3>Name</h3>
                    <p>{planet.name}</p>
                </div>
                <div className="col-md-2">
                    <h3>Climate</h3>
                    <p>{planet.climate}</p>
                </div>
                <div className="col-md-2">
                    <h3>Population</h3>
                    <p>{planet.population}</p>
                </div>
                <div className="col-md-2">
                    <h3>Orbital Period</h3>
                    <p>{planet.orbital_period}</p>
                </div>
                <div className="col-md-2">
                    <h3>Rotation Period</h3>
                    <p>{planet.rotation_period}</p>
                </div>
                <div className="col-md-2">
                    <h3>Diameter</h3>
                    <p>{planet.diameter}</p>
                </div>
         </div>

        </div>
        

    );
};
