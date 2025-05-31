import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
         </Routes>
       </BrowserRouter>
    </ >
  );
};

export default App;