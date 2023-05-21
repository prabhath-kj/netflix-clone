import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Body } from "./components/Body";
const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Body tittle="Popular on Netflix" genre="&language=en-US" />
      <Body tittle="Action & Adventure Movies" genre="&with_genres=28" />
      <Body tittle="ComedyMovies" genre="&with_genres=35" />
      <Body tittle="HorrorMovies" genre="&with_genres=27" />
      <Body tittle="RomanceMovies" genre="&with_genres=10749" />
      <Body tittle="Documentaries" genre="&with_genres=99" />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
