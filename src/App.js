import Navbar from './components/Navbar.js'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home.js'
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import SignUp from './components/pages/Sign-up.js';
function App() {
  return (
    <div className="App">
     <Router>
    <Navbar />
    <Routes>
    <Route path="/" exact element={<Home />}/>
    <Route path="/services" exact element={<Services />}/>
    <Route path="/products" exact element={<Products />}/>
    <Route path="/sign-up" exact element={<SignUp/>}/>
    </Routes>
     </Router>
    </div>
  );
}

export default App;
