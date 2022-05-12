

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


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/contact"  element={<div><NavBar/><Contact /></div>}/>
      <Route exact path="/search/:movie"  element={<div><NavBar/><Search /></div>}/>
      <Route exact path="/payment/:id"  element={<div><NavBar/><Payment /></div>}/>
        <Route exact path="/"  element={<div><NavBar/><HomePage /></div>}/>
        <Route exact path="/login" element={<div><NavBar/><Login /></div>}/>
        <Route exact path="/openingTimes" element={<div><NavBar/><OpeningTimes /></div>}/>
        <Route exact path="/booking" element={<div><NavBar/><Booking /></div>}/>
        <Route exact path="/login/baduser" element={<div><NavBar/><Login /><BadUser /></div>}/>
        <Route exact path="/login/badpass" element={<div><NavBar/><Login /><BadPass /></div>}/>
        <Route exact path="/register" element={<div><NavBar/><Register/></div>}/>
        <Route exact path="/discussionBoard" element={<div><NavBar/><DiscussionBoard/></div>}/>
        </Routes>
    </Router>
  );
}

export default App;