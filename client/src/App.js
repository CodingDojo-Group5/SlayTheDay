
import './App.css';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Main from './views/Main';
import CreateTask from './views/CreateTask';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Login </h1>
        <Routes>
          <Route element={<Main />} path="/tasks" />
          <Route element={<CreateTask />} path='/todo/new' />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
