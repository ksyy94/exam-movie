import React from "react";
import { Route } from "react-router-dom";
import Movie from "./Movie";
import MovieDetail from "./MovieDetail";
import MovieList from "./MovieList";

const Main = () => {
  return (
    <div>
      <switch>
        <Route exact path="/" />
        <Route path="/Movie" component={Movie} />
        <Route path="/MovieList" component={MovieList} />
        <Route path="/MovieDetail/:id" component={MovieDetail} />
      </switch>
    </div>
  );
};

export default Main;
