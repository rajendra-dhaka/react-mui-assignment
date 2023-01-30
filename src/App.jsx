import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './components';
import { Chart, Home, Upsert, Users } from './pages';

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className='page'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/chart' element={<Chart />}></Route>
          <Route path='/upsert/:userId?' element={<Upsert />}></Route>
        </Routes>
      </div>
    </div>
  );
};
