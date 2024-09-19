import React from "react";
import Header from "../components/Header";
import MovieList from "../components/ListaFilmes";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default Home;
