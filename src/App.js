import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import { Projects } from './pages/projects';
import { Experience } from './pages/experience';
import { Footer } from './components/footer';
import {ProjectDisplay} from "./pages/ProjectDisplay"

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>   
           <Routes>
              <Route path='/' element={<Home />}  />
              <Route path='/projects' element={<Projects />} />
              <Route path='/project/:id' element={<ProjectDisplay/>} />
              <Route path='/experience' element={<Experience />} />
           </Routes>
         <Footer/>
       </Router>     
    </div>
  );
}

export default App;
