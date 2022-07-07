import "./App.css";
import React from "react";
import logo from "./logo.png";
import Search from "./search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <main>
            <Search />
          </main>
        </header>
      </div>
      <footer className="text-center">
        This app was coded by{" "}
        <a
          href="https://www.milawp.com/"
          target="_blank"
          rel="noreferrer"
          alt="Milawp Portfolio"
        >
          Mila WP
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Milawp/dictionary-app"
          target="_blank"
          rel="noreferrer"
          alt="github link"
        >
          open sourced
        </a>
        .
      </footer>
    </div>
  );
}
