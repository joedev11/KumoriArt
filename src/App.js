import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import Popular from './pages/Popular'
import Authors from './pages/Authors'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/authors' element={<Authors />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
