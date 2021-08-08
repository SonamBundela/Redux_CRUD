import React from 'react';
import './App.css';
import MyForm from './MyForm';





function App() {
  return (
    <div className="App">
      <h1> Fields</h1>
      <MyForm  onSubmit={values => console.log(values)} />
    
    </div>
  );
}

export default App;
