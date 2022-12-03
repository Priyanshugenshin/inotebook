import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NoteState>
      <Router>
      <Navbar />
      <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<Home />}/>
        </Routes>
    </Router>
    </NoteState>
    </div>
  );
}

export default App;
