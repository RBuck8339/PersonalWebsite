import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {Navbar} from './components/Navigation/Navigation';
import {Home} from './pages/Home/Home';
import {Portfolio} from './pages/Portfolio/Portfolio';
import {Skills} from './pages/Skills/Skills';
import {Experiences} from './pages/Experience/Experience';


function App() {
  return (
    <BrowserRouter>
      {/* Components here appear on every page*/}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Experience' element={<Experiences />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path="*" element={<h1 className='Error'>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
