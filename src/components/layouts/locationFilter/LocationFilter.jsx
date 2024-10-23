import { useState } from "react";

import "./locationFilter.css";
import { locations } from "./locations";
import { Link } from "react-router-dom";

const LocationFilter = () => {


  return (
    <div className={"container-location"} >
      <h2 className="location-menu">Mejores Ofertas</h2>

      <ul className="location-menu">
        {locations.map(({ title, path }) => (
          <li
            key={title}
              className={`location-item ${title === "Nuevo" ? "highlight-new" : ""}`}
            >
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationFilter;