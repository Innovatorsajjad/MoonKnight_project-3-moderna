import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Services from './Pages/Services/Services';
import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Team from './Pages/Team/Team';




function App() {
  return (
    <> 
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/contactUs" element={<ContactUs/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
