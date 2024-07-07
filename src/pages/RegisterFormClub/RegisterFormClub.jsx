import React, { useState } from 'react';
import { db, collection, addDoc } from '../../firebase.js';
import './RegisterClub.css';


const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    whatsappNumber: '',
    rollNumber: '',
    branch: '',
    skills: {
      management: false,
      networking: false,
      techSkills: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'formData'), formData);
      alert('Form submitted successfully');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        whatsappNumber: '',
        rollNumber: '',
        branch: '',
        skills: {
          management: false,
          networking: false,
          techSkills: false,
        },
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Whatsapp Number (Optional):
          <input
            type="tel"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Roll Number:
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Branch:
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </label>
        <fieldset>
          <legend>Skills</legend>
          <label>
            Management:
            <input
              type="checkbox"
              name="management"
              checked={formData.skills.management}
              onChange={handleChange}
            />
          </label>
          <label>
            Networking:
            <input
              type="checkbox"
              name="networking"
              checked={formData.skills.networking}
              onChange={handleChange}
            />
          </label>
          <label>
            Tech Skills:
            <input
              type="checkbox"
              name="techSkills"
              checked={formData.skills.techSkills}
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
