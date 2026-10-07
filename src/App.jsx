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
  const [avengers, setAvengers] = useState(null);

  



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
    

 
useEffect(() => {
  axios.get(`${import.meta.env.VITE_OMDB_API_KEY}`)
    .then(function (response) {
      console.log(response.data);

      setAvengers(
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

  return (
    <>


      <Navbar />
      <Hero />
       

      {movie && <MovieRow title="Popular Movies" movies={movie} />}
       {avengers && <MovieRow title="Avengers Movies" movies={avengers} />}

      <MovieRow title="Popular Series" movies={popularSeries} />
     

      <Footer />
    </>
  );
}

export default App;