import React from "react";
import Logo from "../../assets/working-guy.jpg";
import "./HeroSection.css"
const HeroSection = () => {
  return (
    <main className="HeroSection">
      <div className="DommyText">
        <div>
          <h1>COLD RUNWAY</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatum beatae officia. Voluptatum vitae minus velit quis possimus modi ab officia similique accusantium dicta soluta sapiente eos eaque, consequuntur aperiam.
          </p>
        </div>
        <button>Get Start</button>
      </div>
      <div className="ImgContainer">
        <img src={Logo} alt="/" />
      </div>
    </main>
  );
};

export default HeroSection;
