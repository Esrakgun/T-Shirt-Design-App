import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './components/project/Projects';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "90px",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* İleride başka sayfalar eklemek istersen buraya Route ekleyebilirsin */}
          </Routes>
        </div>
            <Project/>
      </BrowserRouter>
    );
  }
}

export default App;
