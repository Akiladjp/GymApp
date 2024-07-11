import React from "react";
import "./Hero.css";
import { Header } from "../Header.jsx/Header";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best add */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitnsess club in the city</span>
        </div>
        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figuers */}
        <div className="figuers">
          <div>
            <span>140+</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>50+</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* Hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burnes</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};
