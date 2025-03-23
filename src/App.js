import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import FirstTeam from './pages/FirstTeam';
import ScrollToTopButton from './components/ScrollToTopButton';
import Whatsapp from './components/Whatsapp';
import TV from './pages/TV';

function App() {
  return (
    <Router>
      <Navbar />
      <Whatsapp/>
      <ScrollToTopButton/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/first-team/news' element={<FirstTeam/>}/>
        <Route path='/media/ofck' element={<TV/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
