import React from "react";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = (props) => {
  return (
    <div className="row">
      {props.data.map((item) => {
        return (
          <div className="col-md-4" key={item.id}>
            <MovieItem
              src={item.poster_path}
              alt={item.original_title}
              title={item.original_title}
              date={item.release_date}
              overview={item.overview}
              rating={item.vote_average}
              addFilm={() => props.addFilm(item)}
              removeFilm={() => props.removeFilm(item)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
