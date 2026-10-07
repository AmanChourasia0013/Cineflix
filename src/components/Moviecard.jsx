import { useState } from "react";


function MovieCard({ name, image }) {
  const [added, setAdded] = useState(false);  
  function addMovie() {
    setAdded(!added);
  }

  return (
    <div className="moviecard">
      <img src={image} onError={(e) => {
       e.target.src = "/poster.jpg";
      }} />

      <h3>{name}</h3>

      

      <button onClick={addMovie}>{added ? "Added" : "Add to My List"}</button>
    </div>
  );
}

export default MovieCard;
