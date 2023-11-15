import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Box from './Box';
import Todolist from './Todolist';
import { useState } from 'react';


function App() {

 


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>MY TODO</h1>
          <Box />
         


        </div>
      </div>
    </div>
  );
}

export default App;
