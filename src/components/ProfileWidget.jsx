/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "../styles/ProfileCard.css";
import avatar from "/portrait.jpg";

function ProfileWidget({
  name = "Anthony Seadler",
  age = 27,
  city = "Oklahoma City",
  languages = "5+",
  skills = 8,
  experience = "3+ years",
}) {
  return (
    <div className="card-container">
      <header>
        <img src={avatar} alt={name} />
      </header>
      <h1 className="bold-text">
        {name} <span className="normal-text">{age}</span>
      </h1>
      <h2 className="normal-text">{city}</h2>
      <div className="social-container">
        <div className="sub-info">
          <h1 className="bold-text">{languages}</h1>
          <h2 className="smaller-text">Languages</h2>
        </div>
        <div className="sub-info">
          <h1 className="bold-text">{skills}</h1>
          <h2 className="smaller-text">Skills</h2>
        </div>
        <div className="sub-info">
          <h1 className="bold-text">{experience}</h1>
          <h2 className="smaller-text">Experience</h2>
        </div>
      </div>
      <div className="bio">
        <p>
          <strong style={{ color: "#ccc" }}>Bio:</strong> Hi there! I'm Anthony
          Seadler, though most people call me AJ. I'm a full-stack developer
          with a Web Development certification from the University of Oklahoma
          and Fullstack Academy. Currently, I’m pursuing a Bachelor of Science
          in Cybersecurity at Southern Nazarene University, combining my passion
          for development with a strong focus on security.
        </p>
      </div>
    </div>
  );
}

export default ProfileWidget;
