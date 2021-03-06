import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/NavBar";
import Movie from "./components/MoviePage/Movie";
import MovieList from "./components/MoviesTab/MovieList";
import Person from "./components/PersonPage/Person";
import SearchPage from "./components/SearchPage";
import QuizPage from "./components/Quiz/QuizPage";
import QuizAnswer from "./components/Quiz/QuizAnswer";
import Watchlist from "./components/Watchlist";

function App() {


  const [watchlist, setWatchlist] = useState(localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")): []);

  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<MovieList />} />

        <Route
          path="/watchlist"
          element={
            <Watchlist setWatchlist={setWatchlist} watchlist={watchlist} />
          }
        />

        <Route
          path="/movie/:movieId"
          element={<Movie setWatchlist={setWatchlist} watchlist={watchlist} />}
        />

        <Route path="/people/:personId" element={<Person />} />

        <Route path="/search/:searchterm" element={<SearchPage />} />

        <Route path="/quiz" element={<QuizPage />} />

        <Route path="/quizanswer/:answer/:input" element={<QuizAnswer />} />
      </Routes>
    </main>
  );
}

export default App;
