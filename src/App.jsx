import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';



function App() {
  return (
 
    <>
      <Nav/>
      <Header/>
      <Menu/>
      <Testimonials/>
      <Footer/>

    </>
  );
}

export default App;