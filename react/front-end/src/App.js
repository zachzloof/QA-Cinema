

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


function App() {
  return (
    <Router>
      <Routes>
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
        </Routes>
    </Router>
  );
}

export default App;