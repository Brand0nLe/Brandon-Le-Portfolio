import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/navbarcomponent/Header';
import AppRoutes from './components/services/RouterService';

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

export default App;

