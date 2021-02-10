import React, { Component } from "react";
import { API_URL, API_KEY_3 } from "./utils/api";
import MovieList from "./components/MovieList/MovieList";
// import { moviesData } from "./data";
import Navbar from "./components/NavList/Navbar";
import ListWatch from "./components/NavList/ListWatch/ListWatch";
import "./App.css";

export default class App extends Component {
  state = {
    movie: [],
    menu: false,
    willWatch: [],
  };

  async componentDidMount() {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}`
    );
    const data = await response.json();

    this.setState({ movie: data.results });
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  closeMenuHandler = () => {
    this.setState({ menu: false });
  };

  addFilmHandler = (movie) => {
    const willWatch = [...this.state.willWatch];
    willWatch.push(movie);
    this.setState({ willWatch });
  };

  removeFilmHandler = (movie) => {
    const willWatch = this.state.willWatch.filter((item) => {
      return item.id !== movie.id;
    });

    this.setState({ willWatch });
  };

  render() {
    return (
      <>
        <Navbar
          toggleMenu={this.toggleMenuHandler}
          films={this.state.willWatch}
        />
        <ListWatch
          isOpen={this.state.menu}
          closeMenu={this.closeMenuHandler}
          willWatch={this.state.willWatch}
        />
        <div className="container">
          <MovieList
            data={this.state.movie}
            addFilm={this.addFilmHandler}
            removeFilm={this.removeFilmHandler}
          />
        </div>
      </>
    );
  }
}
