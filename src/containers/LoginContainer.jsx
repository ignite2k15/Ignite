import React, { useState } from "react";
import Login from "../pages/Login/Login";
import { supabase } from "../config/apiConfig";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setFormError("Please fill in the fields correctly");
      return;
    }
  
    try {
      const { data, error } = await supabase
        .from('register')
        .select()
        .eq('email', email)
        .eq('password', password);
  
      if (error) {
        console.error("Error:", error);
        setFormError("Invalid Email and password");
      }
  
      if (data.length === 1) {
        console.log("Password matches");
        navigate('/');
      } else {
        setFormError("Password Does not match...")
        console.log("Password does not match");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormError("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className="LoginContainer-main">
      <Login
        email={email}
        password={password}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        formError={formError}
      />
      <br />
    </div>
  );
};

export default LoginContainer;
