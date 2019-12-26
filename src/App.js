import React from 'react';
import './App.css';
import ReactMapGL from 'react-map-gl';
import Map from './Map.js';
import Restaurants from './Restaurants.js';

function App() {
  return (
    <div className="App">
     <div className="main">
       <div className="map">
       <Map />
       </div>
       <div className="restaurants">
       <Restaurants />
       </div>
     </div>
    </div>
  );
}

export default App;
