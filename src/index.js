import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar2 from './navBar2';
import ImgOverlay from './imageOverlay';
import reportWebVitals from './reportWebVitals';
import MyForm from './Form';
import AppCert from './AppCert';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar2/>
    <ImgOverlay imgid="aboutme" imgsrc="../linkedinbanner-trans.png" card_title="About Me" card_text="Here you can write whatever you want"/>
    <App/>    
    <ImgOverlay imgid="edu" imgsrc="../school3.png" card_title="Education" card_text="Here you can write whatever you want"/>
    <ImgOverlay imgid="skills" imgsrc="../skills1.png" card_title="Skills"/>
    <AppCert/>
    <ImgOverlay imgid="hobbies" imgsrc="../skills1.png" card_title="Hobbies & Interests"/>
    <MyForm contactformid="contactform"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
