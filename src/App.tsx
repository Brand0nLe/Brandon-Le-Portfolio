import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/navbarcomponent/Header';
import AppRoutes from './components/services/RouterService';
import Footer from './components/footercomponent/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
