import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BadUser from './BadUser';
import BadPass from './BadPass';
import Register from './Register';
import DiscussionBoard from './DiscussionBoard';
import Payment from './Payment';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/payment"  element={<Payment />}/>
        <Route exact path="/"  element={<Login />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/login/baduser" element={<div><Login /><BadUser /></div>}/>
        <Route exact path="/login/badpass" element={<div><Login /><BadPass /></div>}/>
        <Route exact path="/register" element={<div><Register/></div>}/>
        <Route exact path="/discussionBoard" element={<div><DiscussionBoard/></div>}/>
        </Routes>
    </Router>
  );
}

export default App;