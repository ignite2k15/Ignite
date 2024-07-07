import React from 'react';
import './login.css'


const Login = ({ email, password,formError, onEmailChange, onPasswordChange, onSubmit}) => {
  return (
    <div className='main-container'>
    <div className="login_form_container">
      <form  onSubmit={onSubmit} className="login_form">
        <h2>Login</h2>
        <div className="input_group">
          <i className="fa fa-user"></i>
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
        <div className="button_group" id="login_button">
          <button type='submit'>Submit</button>
        </div>
        <div className='for-error-messege'>
          {formError && <p>{formError}</p>}
        </div>
      </form>      
    </div>
  </div>
  );
}

export default Login;
