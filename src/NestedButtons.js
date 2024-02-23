import React from 'react';
import './styles/NestedButtons.css'; 

// Define the NestedButtons component
const NestedButtons = () => {
  const handleOuterClick = () => {
    alert('this is outer button');
  };

  // Handle click for inner button, stop event from going to outer button
  const handleInnerClick = (e) => {
    e.stopPropagation(); // Stop click from reaching outer button
    alert('this is inner button');
  };

  // Render buttons: outer button and inner button inside it
  return (
    <div>
      <button onClick={handleOuterClick}>Outer Button
        <div onClick={(e) => e.stopPropagation()}>
          <button className="innerButton" onClick={handleInnerClick}>
            Inner Button
          </button>
        </div>
      </button>
    </div>
  );
};

export default NestedButtons;
