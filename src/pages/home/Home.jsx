import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import img2 from "../../assets/hero-img.png";
import linkedln from "../../assets/socialmedia/linkedin.png";
import twitter from "../../assets/socialmedia/letter-x.png";
import instagram from "../../assets/socialmedia/instagram.png";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-d">
        <div className="hero-p">
          <p className="hero-p1">
            <span>'Bridging</span> the gap inspiring with<span> future'</span>
          </p>
          <p className="hero-p2">
            ‘Fostering collaboration and innovation Ignite,where students and
            Alumni connect’.
          </p>
          
          
          <div className="social-media-logos">
            <a
              href="https://www.linkedin.com/company/ignite-svuce/"
              target="_blank"
            >
              <img src={linkedln} alt="ln" className="social-media-logo" />
            </a>
            <img src={twitter} alt="twi" className="social-media-logo" />
            <a
              href="https://www.instagram.com/ignite_svuce/?hl=en"
              target="_blank"
            >
              <img src={instagram} alt="insta" className="social-media-logo" />
            </a>
          </div>
          <div className="hero-p3">
          <Link to="/home"><button className="for-button-1">Join the discard</button></Link>
          <Link to="/volunteer"><button className="for-button-2">Be a volunteer</button></Link>
            
          </div>
        </div>
        <div className="hero-img">
          <img className="Group" src={img2} alt="Group" />
        </div>
      </div>
    </div>
  );
};

export default Home;
