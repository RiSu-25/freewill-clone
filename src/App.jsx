import 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Form from './pages/Form';
import FormHeader from './pages/FormHeader';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation(); 

  return (
    <>
      {location.pathname !== '/form' && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/formHeader' element={<FormHeader />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
