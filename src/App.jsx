import { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/Movierow";
import Moviecard from "./components/Moviecard";
import Footer from "./components/Footer";
import "./App.css";
import {useEffect} from "react";

function App() {
  const [movie, setMovie] = useState(null);

  



  useEffect(() => {
  axios.get(`${import.meta.env.VITE_OMDB_API_KEY_URL}`)
    .then(function (response) {
      console.log(response.data);

      setMovie(
        response.data.Search.map(function (item) {
          return {
            name: item.Title,
            image: item.Poster,
            genre: item.Year
          };
        })
      );
    });
}, []);
    

  const popularSeries = [
    {
      name: "Breaking Bad",
      image: "Breaking Bad.jpeg",
      genre: "American Crime Drama",
    },
    {
      name: "Peaky Blinders",
      image: "peaky blinders.jpg",
      genre: "British Crime drama",
    },
    {
      name: "Money Heist",
      image: "money heist.jpg",
      genre: "Spanish Crime drama",
    },
    {
      name: "Drive To Survive",
      image: "drove.jpg",
      genre: "Sports Documentry",
    },
  ];

  const trending = [
    {
      name: "Wednesday",
      image: "wednesday.jpg",
      genre: "Mystery",
    },
    {
      name: "Black Summer",
      image: "Black Summer.png",
      genre: "Horror Post-Apocalyptic drama",
    },
    {
      name: "Squid Game",
      image: "squid game.png",
      genre: "Dystopian Survival thriller",
    },
    {
      name: "Dark",
      image: "dark1.jpg",
      genre: "Sci-Fi thriller",
    },
  ];

  return (
    <>


      <Navbar />
      <Hero />
       

      {movie && <MovieRow title="Popular Movies" movies={movie} />}

      <MovieRow title="Popular Series" movies={popularSeries} />
      <MovieRow title="Trending Now" movies={trending} />

      <Footer />
    </>
  );
}

export default App;