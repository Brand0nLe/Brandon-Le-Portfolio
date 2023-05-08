import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/navbarcomponent/Header';
import AppRoutes from './components/services/RouterService';
import Footer from './components/footercomponent/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;

