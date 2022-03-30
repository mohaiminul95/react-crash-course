import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import "./App.css"
import Home from './components/Home'
import Feed from './components/Feed'
import Calculator from './components/Calculator'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul className="navStyle">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/feed'>Feed</Link>
          </li>
          <li>
            <Link to='/calculator'>Calculator</Link>
          </li>
        </ul>
        <br />
        <hr />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/calculator' element={<Calculator />} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
