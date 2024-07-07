import React, { useState } from 'react';
import './button.css';
import { Link } from 'react-router-dom';

const Button = () => {

  return (
    <div className='for-buttons'>
      <Link to='/login' className='login'>Login</Link>
      <Link to='/registration' className='register'>Register</Link>
    </div>
  );
};

const Readbutton = () => {
  return (
    <>
      <button type="button" className='read'>Read now</button>
    </>
  );
};
const Applynow = () =>{
  return(
    <>
    <button type="button" className='apply'>Apply now</button>
    </>
  )
}

export default Button;
export { Readbutton , Applynow};
