
import './App.css';
import Nav from "./components/Nav"
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import {
  Route,
  Routes
} from "react-router-dom"
import Footer from './components/Footer';


function App() {
  return (
 

      <div className='main-align'>
  
        <Nav/>
        <Routes> 
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route> 
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        </Routes>
        <Footer/>
    </div>

  );
}

export default App;