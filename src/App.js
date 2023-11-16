import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Popular from './pages/Popular'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/popular' element={<Popular />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
