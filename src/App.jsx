import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Casa from './componentes/Casa';
import UserContext from '../context/UserContext';
import Navbar from './componentes/Navbar';
import History from './componentes/History';

function App() {
  return (
    <UserContext>
    <main className='main'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Casa />} />
          <Route path='historial' element={<History/>}/>
        </Routes>
      </BrowserRouter>
    </main>
    </UserContext>
  );
}

export default App;


