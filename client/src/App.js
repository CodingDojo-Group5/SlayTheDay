
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Main from './views/Main';
import CreateTask from './components/CreateTask';
import Landing from './components/Landing';
import Create from './components/Create';
import Update from './views/Update';
import LogoutButton from './components/LogoutButton';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/create' element={<Create />} />

          <Route element={<Main />} path="/user/todos" />
          <Route element={<CreateTask />} path='/todo/new' />
          <Route element={<LogoutButton />} path='/user/logout' />
          <Route element={< Update />} path='/todo/:id' />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
