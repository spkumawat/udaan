import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route , Router} from "react-router-dom";
import NavBar from './Components/Navbar'
import Header from './Components/Header';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs.js' ;
import Counts from './pages/Counts';
import Events from './pages/Events';
import Team from './pages/Team';
import Gallary from './pages/Gallary' ;


function App() {
  return (
     <>
     <BrowserRouter>

        <Header />
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element = {<AboutUs />} /> 
        <Route path ="/counts" element = {<Counts /> }  /> 
        <Route path = "/events" element ={<Events />} /> 
        <Route path = "/team" element = { <Team /> }  /> 
        <Route path = "/gallary" element = {<Gallary /> } /> 
        </Routes>
     </BrowserRouter>
       
    </>
    
  );
}


// function App() {
//   return (
//      <>
//       <Router>
//         <NavBar />
//         <div className="pages">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </Router>
//     </>
    
//   );
// }

export default App;
