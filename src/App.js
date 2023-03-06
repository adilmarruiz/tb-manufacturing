import NavBar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Categories from './components/Categories';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen max-h-screen flex-col bg-neutral-900">
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/categories' element={<Categories/>}></Route>
          <Route path='/about-us' element={<About/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
