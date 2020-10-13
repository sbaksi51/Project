import React, { useState, useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

import "./Autosys.css";

const Autosys = ({ selectedAirport, setState, actionProvider }) => {
  const [displaySelector, toggleDisplaySelector] = useState(true);
  const [airports, setAirports] = useState([]);

  const airportOptions = [
    {
      iata: "OSL",
      nameCompact: "Oslo",
    },
    {
      iata: "BOO",
      nameCompact: "Bodo",
    },
  ];

  useEffect(() => {
    setAirports(airportOptions);
  }, []);

  const handleSubmit = (e) => {
    setState((state) => ({
      ...state,
      selectedAirport: airports.find(
        (airport) => airport.iata === e.target.value
      ),
    }));
  };

  const handleConfirm = () => {
    //actionProvider.handleOptions();
    toggleDisplaySelector((prevState) => !prevState);
  };

  if (!airports) return null;

  const createAirportOptions = () => {
    return airports.map((item) => {
      return (
        <option key={item.iata} value={item.iata}>
          {item.nameCompact}
        </option>
      );
    });
  };

  return (
    <div className="container">
      <ConditionallyRender
        ifTrue={displaySelector}
        show={
          <>
            {" "}
            <h2 className="heading">Application</h2>
            <select
              className="selector"
              value={selectedAirport.iata}
              onChange={handleSubmit}
            >
              {createAirportOptions()}
            </select>
            <button className="confirm" onClick={handleConfirm}>
              Confirm
            </button>
          </>
        }
        elseShow={
          <>
            <h2 className="heading">Airport</h2>
            <p>
              Great! You have chosen this airport: {selectedAirport.nameCompact}
            </p>
          </>
        }
      />
    </div>
  );
};
export default Autosys;