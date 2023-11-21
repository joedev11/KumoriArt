import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import Popular from './pages/Popular'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/categories' element={<Collections />} />
          <Route path='/popular' element={<Popular />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
