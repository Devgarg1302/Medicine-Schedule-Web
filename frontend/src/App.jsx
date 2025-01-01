
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './layout/home';
import Schedule from './layout/schedule';
import History from './layout/history';
import Header from './components/header';
import Footer from './components/footer';
import ScheduleCards from './layout/cards';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/cards" element={<ScheduleCards />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;