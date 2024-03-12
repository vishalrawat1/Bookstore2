import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './Components/Navbar';
import Home from './Pages/Home.jsx';
import Books from './Pages/Books.jsx';
import Addbook from './Pages/Addbook.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element= {<Home/>}/>
        <Route exact path='/Books' element={<Books/>} />
        <Route exact path='/addbook' element= {<Addbook/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
