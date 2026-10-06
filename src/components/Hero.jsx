function Hero() {
  function showMessage() {
    alert("Welcome to CineFlix!");
  }
  
return (
    <div className="hero">
      <div className="herotext">
        <h1>Stranger Things</h1>
        <button onClick={showMessage}>Watch Now</button>
        
      </div>
    </div>
  );
}
export default Hero;
