

import './App.css';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Main from './views/Main';
import CreateTask from './views/CreateTask';
import Landing from './components/Landing';
import Create from './components/Create';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route element={<Main />} path="/tasks" />
          <Route element={<CreateTask />} path='/todo/new' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
