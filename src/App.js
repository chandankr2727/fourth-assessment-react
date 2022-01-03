import './App.css';
import Home from './Components/Home';
import Students from './Components/Students';
import About from './Components/About';
import Error from './Components/Error';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <div className='header'>
          <Link to="" className='nav'>Home</Link>
          <Link to="/students" className='nav'>Students</Link>
          <Link to="/about" className='nav'>About</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
          <Route element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
