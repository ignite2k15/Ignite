import React from "react";
import img1 from "../../assets/card-logo.png";
import img2 from "../../assets/card-img.png";
import img3 from "../../assets/news-logo.png";
import img4 from "../../assets/news-img.png";
import { Readbutton, Applynow } from "../Button/Button";
import "./card.css";
import img5 from "../../assets/teampic.jpg";
import img6 from "../../assets/cross.png";
import img7 from "../../assets/eye.png";
import img8 from "../../assets/google.png";

const ActivitesCard = () => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={img1} alt="" className="card-logo" />
          <img src={img2} alt="" className="card-img" />
        </div>

        <div className="card-info">
          <h3 className="card-info-h3">
            Prakruti Suraksha aims to protect and conserve natural . which play
            a vital role in reducing carbon footprints.
          </h3>
          <ul className="card-info-ul">
            <li >
              Prakruthi Sureksha promotes the advancement of carbon-negative
              technologies to mitigate carbon footprints{" "}
            </li>
            <li>
              The main aim is to encouraging them to adopt sustainable practices
              in their daily lives.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};


const NewsCard1 = () => {
  return (
    <>
      <div className="card2">
        <img src={img3} alt="" className="news-logo" />
        <div className="card2-main">
          <p className="card2-text">
            On August 31st, we're hosting a groundbreaking tech event,
          </p>
          <p>Exploring innovations that the future will surely augment.</p>
          <Readbutton />
        </div>
      </div>
    </>
  );
};
const NewsCardLogin = () => {
  return (
    <>
      <div className="card3">
        <img src={img4} alt="" />
        <div className="card3-text-box">
          <p className="card3-text">
            Mark your calendar, our tech exploration is nigh,Cutting-edge
            wonders await, the future's on standby.
          </p>
          <p>
            Join us as we delve deep, innovations will shine,A day to celebrate
            tech, in its grand design.
          </p>
          <Applynow />
        </div>
      </div>
    </>
  );
};

const TeamMemberCard = () => {
  return (
    <>
      <div className="card4">
        <div className="card4-bg">
          <div className="card4-info">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="card4-text">
          <strong>team member name</strong>
          <p>position</p>
        </div>
      </div>
    </>
  );
};
const TeamMemberCard2 = () => {
  return (
    <>
      <div className="card5">
        <div className="card5-bg">
          <div className="card4-info">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="card5-text">
          <strong>team member name</strong>
          <p>position</p>
        </div>
      </div>
    </>
  );
};
const RegisterCard = ({ closeRegister }) => {
  return (
    <>
      <div className="Rcard">
        <div className="rcard">
          <p>Get Started</p>
          <img src={img6} alt="" onClick={() => closeRegister(false)} />
        </div>
        <form>
          <label for="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          ></input>
          <br />
          <label for="email">Email</label>
          <br />
          <input type="email" id="email" placeholder="Email"></input>
          <br />
          <label for="pwd">Password:</label>
          <br />
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Password"
          ></input>
          <br />
          <button type="submit" value="Register" className="Register">
            Register
          </button>
          <br />
        </form>
        <img src={img8} alt="" className="google" />
        <p className="text">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </>
  );
};
const LoginCard = ({ closeLogin }) => {
  return (
    <>
      <div className="Lcard">
        <div className="lcard">
          <p>Welcome Back</p>
          <img src={img6} alt="" onClick={() => closeLogin(false)} />
        </div>
        <form>
          <label for="email">Email</label>
          <br />
          <input type="email" id="email" placeholder="Email"></input>
          <br />
          <label for="pwd">Password:</label>
          <br />
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="Password"
          ></input>
          <br />
          <button type="submit" value="login" className="login12">
            Login
          </button>
          <br />
        </form>
        <img src={img8} alt="" className="google2" />
        <p className="text2">
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </>
  );
};
export default TeamMemberCard;

export {
  NewsCardLogin,
  ActivitesCard,
  TeamMemberCard2,
  RegisterCard,
  LoginCard,
  NewsCard1,
};
