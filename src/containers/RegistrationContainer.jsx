import  { useState } from "react";
import Register from "../pages/Registration/Registration";
import {supabase} from "../config/apiConfig";

const RegistationContainer = () => {
  const [name,setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");
  const [starting_year,setStartYear] = useState("");
  const [ending_year,setEndingYear] = useState("");
  const [formError,setFormError] = useState("");
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };


  const handleNameChange = (e) =>{
    setName(e.target.value)
  }

  const handlestartChange = (e) =>{
    setStartYear(e.target.value)
  }

  const handleendChange = (e) =>{
    setEndingYear(e.target.value)
  }

 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !pin || !email || !starting_year || !ending_year || !password) {
      setFormError("Please fill in the fields correctly");
      return;
    }

    // Check if email or pin already exists
    const { data: existingUsers, error: fetchError } = await supabase
      .from('register')
      .select('email, pin')
      .eq('email', email)
      .eq('pin', pin);

    if (fetchError) {
      console.log(fetchError);
      // Handle the error, maybe show a message to the user
      return;
    }

    if (existingUsers && existingUsers.length > 0) {
      console.log("Already exists");
      setFormError("Email or PIN already exists. Please use a different one.");
      return;
    }

    const { data, error } = await supabase
      .from('register')
      .insert([
        { name: name, pin: pin, email: email, start: starting_year, end: ending_year, password: password }
      ])
      .select();

    if (error) {
      console.log(error);
      // Handle the error, maybe show a message to the user
    } else if (data) {
      console.log(data);
      setFormError(null);
      // Clear input fields after successful submission
      setEmail("");
      setPassword("");
      setStartYear("");
      setEndingYear("");
      setName("");
      setEndingYear("");
      setStartYear("");
      setPin("");
    }
  };
  return (
    <div className="LoginContainer-main">
      <Register
        name={name}
        email={email}
        starting_year={starting_year}
        ending_year = {ending_year}
        password={password}
        pin={pin}
        onPinChange={handlePinChange}
        onNameChange={handleNameChange}
        onStartingYearChange={handlestartChange}
        onEndingYearChange={handleendChange}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        onFormError={formError}
      />
    </div>
  );
};

export default RegistationContainer;