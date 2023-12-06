import './App.css';
import '../src/memechalangecomponents/styles/meme.css'
 import Bts from './projects/Bts/Bts';
 import Contact from './projects/Bts/components/Contact';
 import About from './projects/Bts/components/About';
 import logo1 from './projects/Bts/Images/react-logo.png';
 import Register from './projects/Bts/components/Register';
 import Explore from './projects/Bts/components/Explore' ;

// import Meme from './memechalangecomponents/memegenerator';
// import Counter from '../src/memechalangecomponents/Counter';
// import Sam from './projects/Bts/components/Sam';
// import DarkLight from './practiceprojects/darkLightMode/DarkLight.js';
 import Home from './Diceroll/Home';

import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import Account from './projects/Bts/components/Account';
function App() {
 
  return (
    <BrowserRouter>
    <header >
    
       
    <nav className='nav'>
                <a href="https://youtube.com/" target="blank">
                    <img src={logo1} className="imgpage2"/>
                </a>
                <h2 className="bts">BTS</h2>
                <input placeholder="search here" className="searchbox"></input>
                <ul className="navitems">
                    <li><Link to='/'><button >Home</button></Link></li>
                    <li><Link to={'/explore'}><button >Explore</button></Link></li>
                    <li><button >Orders</button></li>
                    <li><Link to={'/account'}><button>Account</button></Link></li>
                    <li><Link to={'/about'}><button>About</button></Link></li>
                    <li><Link to={'/contact'}><button>ContactUs</button></Link></li>
                    <li><button>Logout</button></li>
                    <li><Link to="/register"><button>Register</button></Link></li>
                </ul>

            </nav>
     
    </header>

      <Routes>
      <Route path="/explore" element={<Explore/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account" element={<Account/>}/>
   
      {/* <div className="App1">
      
      </div> */}
      </Routes>
      </BrowserRouter>

  
  );
}

export default App;
