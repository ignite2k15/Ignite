import "./TeamsPage.css";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ceo from "../../assets/team2024/cmo.jpg";
import cto from "../../assets/team2024/cmo.jpg";
import cso from "../../assets/team2024/cmo.jpg";
import coo from "../../assets/team2024/cmo.jpg";
import cmo from "../../assets/team2024/cmo.jpg";
import cfo from "../../assets/team2024/cmo.jpg";

const Teams = () => {
  const teamMembers = [
    {
      name: "Pillanagrovi Rahul",
      role: "Chief Excuitive Officer",
      imageSrc: ceo,
      linkedin: "https://www.linkedin.com/in/pillanagrovi-rahul-14b156256",
      twitter: "https://twitter.com/johndoe",
      email: "mailto:pillanagrovirahul20s@gmail.com",
    },    
    {
      name: "K Anil Kumar",
      role: "Chief Tehnical Officer",
      imageSrc: cto,
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      email: "mailto:johndoe@example.com",
    },
    {
      name: "Nikitha",
      role: "Chief Finance Officer",
      imageSrc: cfo,
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      email: "mailto:johndoe@example.com",
    },
    {
      name: "Devalla Ram Praveen",
      role: "Chief Operations Officer",
      imageSrc: coo,
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      email: "mailto:johndoe@example.com",
    },  
    {
      name: "Aturu Guru Lakshmi",
      role: "Chief Marketing Officer",
      imageSrc: cmo,
      linkedin: "https://www.linkedin.com/in/guru-lakshmi-a-07306a263",
      twitter: "https://twitter.com/johndoe",
      email: "mailto:agurulakshmi93@gmail.com",
    },
    {
      name: "C Sai Vivek",
      role: "Chief Communication Officer",
      imageSrc: cso,
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      email: "mailto:johndoe@example.com",
    },
  ];

  return (
    <div className="for-whole-Team-page">
      <h1 className="for-heading-in-team">The Crew</h1>
      <div className="blockContainer">
        {teamMembers.map((member, index) => (
          <div className="blockInfo" key={index}>
            <div className="for-image">
              <div className="block-img">
                <img src={member.imageSrc} alt={member.name} />
              </div>
            </div>
            <p>{member.name}</p>
            <div className="social-icons">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={member.email} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <h3>{member.role}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
