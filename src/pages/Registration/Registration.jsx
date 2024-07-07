import React from 'react';
import './registration.css';

const Register = ({ name,email,starting_year, pin,ending_year,password, onNameChange,onEmailChange,onPinChange, onStartingYearChange, onPasswordChange,onEndingYearChange, onSubmit, onFormError}) => {
  return (
    <div className="register_form_container">
      <form  onSubmit={onSubmit} className="register_form">
        <h2 className='for-heading'>Register</h2>
        <div className="input_group">
          <i className="fa fa-user"></i>
          <input
            type="text"
            placeholder="Name"
            className="input_text"
            autoComplete="off"
            required={true}
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className="input_group">
         <i className="fa fa-hashtag"></i>
          <input
            type="text"
            placeholder="Enter Your PIN"
            className="input_text"
            autoComplete="off"
            required={true}
            value={pin}
            onChange={onPinChange}
          />
        </div>
        <div className="input_group">
          <i className="fa fa-envelope"></i>
          <input
            type="email"
            placeholder="Email"
            className="input_text"
            autoComplete="off"
            required={true}
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div className="input_group">
          <i className="fa fa-calendar"></i>
          <input
            type="number"
            placeholder="Starting year"
            className="input_text"
            autoComplete="off"
            required={true}
            value={starting_year}
            onChange={onStartingYearChange}
          />
        </div>
        <div className="input_group">
          <i className="fa fa-calendar"></i>
          <input
            type="number"
            placeholder="Ending Year"
            className="input_text"
            autoComplete="off"
            required={true}
            value={ending_year}
            onChange={onEndingYearChange}
          />
        </div>
        <div className="input_group">
          <i className="fa fa-unlock-alt"></i>
          <input
            value={password}
            required = {true}
            type="password"
            placeholder="Password"
            className="input_text"
            autoComplete="off"
            onChange={onPasswordChange}
          />
        </div>
        <br/>
        <div className='for-form-error'>{onFormError}</div>
        <div className="button_group" id="register_button">
          <button type='submit'>SUBMIT</button>
        </div>
        
      </form>
    </div>
  );
}

export default Register;