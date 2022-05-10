import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BadUser from './BadUser';
import BadPass from './BadPass';
import Register from './Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<Login />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/login/baduser" element={<div><Login /><BadUser /></div>}/>
        <Route exact path="/login/badpass" element={<div><Login /><BadPass /></div>}/>
        <Route exact path="/register" element={<div><Register/></div>}/>
        </Routes>
    </Router>
  );
}

export default App;
