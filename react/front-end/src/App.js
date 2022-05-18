

import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BadUser from './BadUser';
import BadPass from './BadPass';
import Register from './Register';
import DiscussionBoard from './DiscussionBoard';
import Payment from './Payment';
import HomePage from './homePage';
import Booking from './Booking';
import NavBar from './Navigation/Navbar'
import OpeningTimes from './OpeningTimes'
import Contact from './Contact'
import Search from './Search'
import MoreInfo from './MoreInfo'
import Screens from './screens'
import Header from './Header';
import Footer from './Footer';
import GettingThere from './gettingThere'
import MyTickets from './MyTickets'
import Movie from './Components/Movie';

import BatmanDetails from './Components/MovieDetails/BatmanDetails';
import DrStrangeDetails from './Components/MovieDetails/DrStrangeDetails';
import FantasticBeastsDetails from './Components/MovieDetails/FantasticBeastsDetails';
import MorbiusDetails from './Components/MovieDetails/MorbiusDetails';
import SonicDetails from './Components/MovieDetails/SonicDetails';

import AboutUs from './aboutPage'
import Classification from './Components/Classification/Classification'


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/classifications"  element={<div><NavBar/><Header/><Classification /><Footer/></div>}/>
      <Route exact path="/aboutUs"  element={<div><NavBar/><Header/><AboutUs /><Footer/></div>}/>
      <Route exact path="/myTickets"  element={<div><NavBar/><Header/><MyTickets /><Footer/></div>}/>
      <Route exact path="/gettingThere"  element={<div><NavBar/><Header/><GettingThere /><Footer/></div>}/>
      <Route exact path="/screens"  element={<div><NavBar/><Header/><Screens /><Footer/></div>}/>
      <Route exact path="/contact"  element={<div><NavBar/><Header/><Contact /><Footer/></div>}/>
      <Route exact path="/search/:movie"  element={<div><NavBar/><Header/><Search /><Footer/></div>}/>
      <Route exact path="/deepSearch/:movie"  element={<div><NavBar/><Header/><MoreInfo /><Footer/></div>}/>
      <Route exact path="/payment/:id"  element={<div><NavBar/><Header/><Payment /><Footer/></div>}/>
        <Route exact path="/"  element={<div><NavBar/><Header/><HomePage /><Footer/></div>}/>
        <Route exact path="/login" element={<div><NavBar/><Header/><Login /><Footer/></div>}/>
        <Route exact path="/openingTimes" element={<div><NavBar/><Header/><OpeningTimes /><Footer/></div>}/>
        <Route exact path="/booking" element={<div><NavBar/><Header/><Booking /><Footer/></div>}/>
        <Route exact path="/login/baduser" element={<div><NavBar/><Header/><Login /><BadUser /><Footer/></div>}/>
        <Route exact path="/login/badpass" element={<div><NavBar/><Header/><Login /><BadPass /><Footer/></div>}/>
        <Route exact path="/register" element={<div><NavBar/><Header/><Register/><Footer/></div>}/>
        <Route exact path="/discussionBoard" element={<div><NavBar/><Header/><DiscussionBoard/><Footer/></div>}/>

        <Route exact path="/listings" element={<div><NavBar/><Header/><Movie/><Footer/></div>}/>

        <Route exact path="/listings/Batman" element={<div><NavBar/><Header/><BatmanDetails/><Footer/></div>}/>
        <Route exact path="/listings/DrStrange" element={<div><NavBar/><Header/><DrStrangeDetails/><Footer/></div>}/>
        <Route exact path="/listings/FantasticBeasts" element={<div><NavBar/><Header/><FantasticBeastsDetails/><Footer/></div>}/>
        <Route exact path="/listings/Sonic" element={<div><NavBar/><Header/><SonicDetails/><Footer/></div>}/>
        <Route exact path="/listings/Morbius" element={<div><NavBar/><Header/><MorbiusDetails/><Footer/></div>}/>
        </Routes>
    </Router>
  );
}

export default App;