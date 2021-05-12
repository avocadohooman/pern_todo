import React from 'react';
import './App.css';

//components 
import InputTodo from './components/inputTodo';
import ListTodos from './components/listTodos';

const App = () => {


  return (
    <div className="container">
      <InputTodo/>
      <ListTodos/>
    </div>
  )
}

export default App;
