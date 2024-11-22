import {BrowserRouter, RouterProvider, Route, Routes} from 'react-router-dom';
import './App.css';
import {Navbar} from './components/Navigation/Navigation';
import {Home} from './pages/Home/Home';
import {Portfolio} from './pages/Portfolio/Portfolio';
import {Skills} from './pages/Skills/Skills';
import {Resume} from './pages/Resume/Resume';

function App() {
  return (
    <BrowserRouter>
      {/* Components here appear on every page*/}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
