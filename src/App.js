import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route , Router} from "react-router-dom";
import NavBar from './Components/Navbar'
import Header from './Components/Header';
import Home from './pages/Home'

function App() {
  return (
     <>
     <BrowserRouter>

        <Header />
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
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
