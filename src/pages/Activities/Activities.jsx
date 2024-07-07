import React from "react";
import "./Activities.css";
import hack from "../../assets/hackathon.jpg";
import tresure from "../../assets/treasure.jpg";
import ideathon from "../../assets/ideathon.jpg";

const Activities = () => {
  const activityData = [
    {
      title: "Hacathon",
      description: "A hackathon",
      image: hack,
    },
    {
      title: "Treasure Hunt",
      description: "Treasure hunt",
      image: tresure,
    },
    {
      title: "Ideathon",
      description: "Ideathon",
      image: ideathon,
    },
  ];

  return (
    <div>
      <h1 className="for-heading-in-team">Activities</h1>
      <div className="for-activities">
        {activityData.map((activity, index) => (
          <div key={index} className="activity-card">
            <img
              src={activity.image}
              alt={`Activity ${index + 1}`}
              className="activity-image"
            />
            <div className="activity-content">
              <div className="activity-title">{activity.title}</div>
              <div className="activity-description">{activity.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
