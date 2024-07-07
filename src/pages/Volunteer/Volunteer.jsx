import React, { useState } from 'react';
import { db, collection, addDoc } from '../../firebase.js';
import './Volunteer.css';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    areaCode: '',
    phoneNumber: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    branch: '',
    currentYear: '',
    rollNumber: '',
    skills: {
      webDevelopment: false,
      management: false,
      communication: false,
      organizational: false,
      interpersonal: false,
      networking: false
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'volunteers'), formData);
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        areaCode: '',
        phoneNumber: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        branch: '',
        currentYear: '',
        rollNumber: '',
        skills: {
          webDevelopment: false,
          management: false,
          communication: false,
          organizational: false,
          interpersonal: false,
          networking: false
        }
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Volunteer Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Name</label>
          <div className="name-fields">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            placeholder="Roll Number"
            value={formData.rollNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className="phone-fields">
            <input
              type="text"
              id="areaCode"
              name="areaCode"
              placeholder="Area Code"
              value={formData.areaCode}
              onChange={handleChange}
            />
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="branch">Branch</label>
          <input
            type="text"
            id="branch"
            name="branch"
            placeholder="Branch"
            value={formData.branch}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentYear">Current Year</label>
          <input
            type="text"
            id="currentYear"
            name="currentYear"
            placeholder="Current Year"
            value={formData.currentYear}
            onChange={handleChange}
          />
        </div>

        

        <div className="form-group">
          <label>Please indicate areas to volunteer according to your skills</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="webDevelopment"
                checked={formData.skills.webDevelopment}
                onChange={(e) => handleChange({ target: { name: 'skills', value: { ...formData.skills, webDevelopment: e.target.checked } } })}
              /> Web Development Skills
            </label>
            <label>
              <input
                type="checkbox"
                name="management"
                checked={formData.skills.management}
                onChange={(e) => handleChange({ target: { name: 'skills', value: { ...formData.skills, management: e.target.checked } } })}
              /> Management Skills
            </label>
            <label>
              <input
                type="checkbox"
                name="communication"
                checked={formData.skills.communication}
                onChange={(e) => handleChange({ target: { name: 'skills', value: { ...formData.skills, communication: e.target.checked } } })}
              /> Communication Skills
            </label>
            <label>
              <input
                type="checkbox"
                name="organizational"
                checked={formData.skills.organizational}
                onChange={(e) => handleChange({ target: { name: 'skills', value: { ...formData.skills, organizational: e.target.checked } } })}
              /> Organizational Skills
            </label>
            <label>
              <input
                type="checkbox"
                name="interpersonal"
                checked={formData.skills.interpersonal}
                onChange={(e) => handleChange({ target: { name: 'skills', value: { ...formData.skills, interpersonal: e.target.checked } } })}
              /> Interpersonal Skills
            </label>
            <label>
              <input
                type="checkbox"
                name="networking"
                checked={formData.skills.networking}
                onChange={(e) => handleChange({ target: { name: 'skills', value: { ...formData.skills, networking: e.target.checked } } })}
              /> Networking
            </label>
          </div>
        </div>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Volunteer;
