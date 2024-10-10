import "./Heros.css";
import HeroData from "./HeroData";

const Hero = () => {
  return (
    <div id="hero">
      <h1 className="heading">Popular Photography</h1>
      <div className="hero-main">
        <div className="description">
          <p>
            Some list of photographs considered the most important in surveys
            where authoritative sources review the history of the medium not
            limited by time period. These images may be referred to as the most
            important, most iconic, or most influential—but they are all
            considered key images in the history of photography
          </p>
        </div>

        <HeroData />
      </div>
    </div>
  );
};

export default Hero;
