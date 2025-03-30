import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import FirstTeam from './pages/FirstTeam';
import ScrollToTopButton from './components/ScrollToTopButton';
import Whatsapp from './components/Whatsapp';
import TV from './pages/TV';
import Vision from './pages/vision';
import Presidency2 from './pages/Presidency2';
import History from './pages/History';
import NewsPage1 from './pages/NewsPage1';
import NewsPage2 from './pages/NewsPage2';
import NewsPage3 from './pages/NewsPage3'

//NewsPage3
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
        <Route path='/the-club/vision' element={<Vision/>}/>
        <Route path='/the-club/academy-ofck' element={<TV/>}/>
        <Route path='/the-club/presidency' element={<Presidency2/>}/>
        <Route path='/the-club/history' element={<History/>}/>
        <Route path='/first-team/news1' element={<NewsPage1/>}/>
        <Route path='/first-team/news2' element={<NewsPage2/>}/>
        <Route path='/first-team/news3' element={<NewsPage3/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
