import React from "react";
import "./AdhocOptions.css";

const AdhocOptions = (props) => {
  const options = [
    { text: "Autosys", 
      handler: props.actionProvider.handleAutosys, 
      id: 1,
    },
    { text: "Database", 
      handler: props.actionProvider.handleDatabase, 
      id: 2,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="adhoc-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="adhoc-options-container">{optionsMarkup}</div>;
};

export default AdhocOptions;