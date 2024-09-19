import React, { useState } from "react";
import "../styles/ListaFilmes.css";

const movies = [
  { title: "Movie 1", description: "Short description", image: "/movie1.jpg" },
  { title: "Movie 2", description: "Short description", image: "/movie2.jpg" },
];

const MovieList = () => {
  const [ratings, setRatings] = useState({});

  const handleRating = (movieTitle, rating) => {
    setRatings({ ...ratings, [movieTitle]: rating });
  };

  return (
    <section className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <img
            src={movie.image}
            alt={`Poster of ${movie.title}`}
            loading="lazy"
          />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <div
            className="star-rating"
            role="group"
            aria-label={`Rate ${movie.title}`}
          >
            {[...Array(5)].map((_, i) => (
              <span key={i} onClick={() => handleRating(movie.title, i + 1)}>
                {ratings[movie.title] > i ? "★" : "☆"}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default MovieList;
