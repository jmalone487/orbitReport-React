import React from 'react';
import satData from './satData';  // Ensure the path to satData is correct

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {/* Create buttons for each unique orbit type */}
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}

      {/* Button to display all satellites */}
      <button onClick={() => setSat(satData)}>
        All Satellites
      </button>
    </div>
  );
};

export default Buttons;
