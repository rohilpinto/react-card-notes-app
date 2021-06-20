import React from "react";
import "./scss/App.scss";
import logo from "./assets/enter-icon.svg";
import leftarrow from "./assets/left-arrow.svg";
import rightarrow from "./assets/right-arrow.svg";

const SearchBar = () => {
  return (
    <React.Fragment>
      <div className="searchbar-wrapper">
        <div className="searchbar-title">
          <h1>Card Notes</h1>
        </div>
        <div className="searchbar-container">
          <form className="searchbar-form">
            <input type="text" className="searchbar" />
            <button type="submit" className="searchbar-submit">
              <img src={logo} alt="button" />
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

const NotesCard = () => {
  return (
    <React.Fragment>
      <div className="card-container">
        <div className="arrow arrow-left">
          <img src={leftarrow} alt="" />
        </div>

        <div className="card"></div>

        <div className="arrow arrow-right">
          <img src={rightarrow} alt="" />
        </div>
      </div>
      <Random></Random>
    </React.Fragment>
  );
};

const Random = () => {
  return (
    <React.Fragment>
      <div className="random-btn">
        <button className="btn">Shuffle Notes</button>
      </div>
    </React.Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <NotesCard></NotesCard>
    </div>
  );
}

export default App;
