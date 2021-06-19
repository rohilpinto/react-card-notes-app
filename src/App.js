import React from "react";
import "./scss/App.scss";
import logo from "./assets/enter-icon.svg";

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

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
