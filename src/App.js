import NavBar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Categories from './components/Categories';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen max-h-screen flex-col overflow-auto bg-neutral-900">
        <NavBar/>
        <Routes>
          <Route exact path='/tb-manufacturing' element={<Home/>}></Route>
          <Route path='/tb-manufacturing/categories' element={<Categories/>}></Route>
          <Route path='/tb-manufacturing/about-us' element={<About/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
