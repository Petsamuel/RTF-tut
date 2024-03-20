import { Fragment } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tutorials from './pages/tutorials';
import Project1 from './pages/project1';
import Project2 from './pages/project2';

import "./App"

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Tutorials />} />
          <Route exact path="/project" element={<Project1 />} />
          <Route exact path="/project2" element={<Project2 />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App
