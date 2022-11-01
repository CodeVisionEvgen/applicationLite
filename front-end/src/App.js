import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './main.css';
import axios from 'axios';

axios.get('http://localhost:3000/api/test').then(data=>{
  console.log(data.data)
})
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='*'  element={<h1>Hi</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
