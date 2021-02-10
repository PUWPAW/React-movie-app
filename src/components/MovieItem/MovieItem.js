import React, { useState } from "react";
import "./MovieItem.css";

const MovieItem = (props) => {
  const cls = ["rating"];
  const [willWatch, setWillWatch] = useState(false);

  if (props.rating >= 7) {
    cls.push("high");
  }

  if (props.rating < 7 && props.rating >= 5) {
    cls.push("middle");
  }

  if (props.rating < 5) {
    cls.push("bad");
  }

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/original/${props.src}`}
            className="card-img-top"
            alt={props.alt}
          />
          <div className="description">
            <p className="card-text">{props.overview}</p>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p>Дата релиза: {props.date}</p>
          <div className="card-btn">
            {willWatch ? (
              <button
                className="btn btn-success"
                onClick={() => {
                  setWillWatch(false);
                  props.removeFilm();
                }}
              >
                Remove film
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setWillWatch(true);
                  props.addFilm();
                }}
              >
                Add film
              </button>
            )}
            <small className={cls.join(" ")}>{props.rating}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
