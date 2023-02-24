import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './components/Landing';
import Create from './components/Create';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
