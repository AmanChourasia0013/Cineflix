import MovieCard from "./Moviecard";

function MovieRow({ title, movies }) {
  return (
    <div className="movierow">
      <h2>{title}</h2>

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard
            name={movie.name}
            image={movie.image}
            genre={movie.genre}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;


