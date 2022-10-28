import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Single from './components/Single';
import {BrowserRouter, Routes , Route , Link } from 'react-router-dom';
import Cateagory from './components/Cateagory';
function App() {
  return (
   
  <>
  
  <BrowserRouter>
  <NavBar/>
  <Routes>

  <Route path="/" element={<Home />} />
  <Route path="/Home" element={<Home />} />
  <Route path='/single/:id' element={<Single/>}/>
  <Route path='/category/:category' element={<Cateagory/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
 
  </>
  );
}

export default App;
