import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard.js';
import Home from './pages/home/home.js';
import EventsPage from './pages/eventsPage/eventsPage.js'
import Login from './pages/login/login.js'

function RouterURL() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )

}

export default RouterURL;