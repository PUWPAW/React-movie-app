import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={props.toggleMenu}>
        Movie list
      </button>
      <h4>Will Watch: {props.films.length} movies</h4>
    </nav>
  );
};

export default Navbar;
