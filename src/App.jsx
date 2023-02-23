import './stile/App.scss';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './componenst/Navbar';
import Home from './pagest/Home';
import Chisono from './pagest/Chisono';
import Contatti from './pagest/Contatti';
import Footer from './componenst/Footer'
import Blog from './pagest/Blog';


const  App = () =>{
 return(
  <Router>
    <div className="App">
      
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />}/> 
      <Route exact path='/chisono' element ={<Chisono />} /> 
      <Route exact path='/contatti' element={<Contatti />} /> 
      <Route exact path='/blog' element={<Blog />} /> 
    </Routes>
      <Footer />
    </div>
    </Router>
    );
}

export default App;
