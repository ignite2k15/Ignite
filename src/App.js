import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavComponent from './components/NavBar/NavComponent';
import Home from './pages/home/Home';
import Activites from './pages/Activities/Activities';
import LoginContainer from './containers/LoginContainer';
import RegistationContainer from './containers/RegistrationContainer';
import Contact from './pages/Contact/Contact';
import Teams from './pages/Teams/TeamsPage';
import Gallery from './pages/Gallery/Gallery';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import Register from './pages/Register/Register';
import RegisterFormClub from './pages/RegisterFormClub/RegisterFormClub';
import Volunteer from './pages/Volunteer/Volunteer';

function App() {
  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path="/home" element={<HomeScreen/>} />
        <Route path="/login" element={<LoginContainer/>} />
        <Route path="/registration" element={<RegistationContainer/>} />
        <Route path="/activities" element={<Activites/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/teams" element={<Teams/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerintoclub" element={<RegisterFormClub/>} />
        <Route path="/volunteer" element= {<Volunteer/>} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App;