import React from "react";
import ReviewsSlider from "./components/Slider";
import reviews from "./data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app--header">
        <h1 className="header--title">Movie Reviews</h1>
      </header>
        <ReviewsSlider key={reviews.id} reviews={reviews} />
    </div>
  );
}

export default App;
