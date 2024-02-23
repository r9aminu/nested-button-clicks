import React from 'react';
import './App.css';
import NestedButtons from './NestedButtons'; // Import the NestedButtons component

function App() {
  return (
    <div className="App">
      <h1>Event Propagation Assignment</h1>
      <NestedButtons /> {/* Use the NestedButtons component */}
    </div>
  );
}

export default App;
