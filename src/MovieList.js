import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const MovieListStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  padding: 20px 250px;
`;
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("그림 그려짐");
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }, []);

  function deleteById(movieId) {
    fetch("http://10.100.102.2:8000/api/movie/" + movieId, {
      method: "delete",
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          setMovies(movies.filter((movie) => movie.id !== movieId));
          alert("삭제 되었습니다.");
        }
      });
  }
  return (
    <MovieListStyle>
      {movies.map((movie) => (
        <MovieItem movie={movie} deleteById={deleteById} />
      ))}
      <hr />
    </MovieListStyle>
  );
};

export default MovieList;
