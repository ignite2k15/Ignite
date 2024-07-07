import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const clubs = [
  {
    heading: "Robotics",
    description:
      "Join our robotics club to explore the fascinating world of robotics and automation. Build and program your own robots!",
    button: "Coming Soon",
    image: "path/to/robotics-image.jpg", // Replace with the actual image path
  },
  {
    heading: "Chess Club",
    description:
      "Sharpen your strategic thinking by joining our chess club. Compete in tournaments and improve your skills!",
    button: "Join Now",
    image: "path/to/chess-image.jpg", // Replace with the actual image path
  },
  {
    heading: "Art Club",
    description:
      "Express your creativity and join our art club. Participate in workshops, exhibitions, and collaborative projects!",
    button: "Learn More",
    image: "path/to/art-image.jpg", // Replace with the actual image path
  },
  // Add more clubs as needed
];

const ClubCard = ({ club }) => (
  <div className="club-card">
    {/* <img className='club-image' src={club.image} alt={`${club.heading} Image`} /> */}
    <div className="club-details">
      <h2 className="club-heading">{club.heading}</h2>
      <p className="club-description">{club.description}</p>
      <button className="club-button">{club.button}</button>
    </div>
  </div>
);

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-section">
        <h2 className="club-heading">Volunteer Register</h2>
        <p className="club-description">
        Joining the Ignite Club as a volunteer means becoming a
          catalyst for change and innovation. Dive into a dynamic community
          where ideas ignite into action, driving positive change in our
          community and beyond. Embrace the opportunity to collaborate,
          innovate, and make a meaningful impact from day one.
        </p>
        <Link to="/volunteer" className="club-button">
          Register Now
        </Link>
      </div>
      <div className="clubs-section">
        <h2 className="club-headings">Clubs</h2>
        <div className="clubs-list">
          {clubs.map((club, index) => (
            <ClubCard key={index} club={club} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
