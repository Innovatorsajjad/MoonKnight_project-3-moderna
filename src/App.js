import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Services from './Pages/Services/Services';
import Portfolio from './Pages/Portfolio/Portfolio'
import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <> 
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/contactUs" element={<ContactUs/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
