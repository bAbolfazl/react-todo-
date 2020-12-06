import React, { useState } from 'react';

import Input from './components/input/input.component';
import Title from './components/title/title.component';
import TodoList from './components/todoList/todoList.component';

const App = () => {

const [todoList, setTodoList] = useState([])

  return (
    <div className="container text-center">
      <Input setTodoList={setTodoList} />
      <Title todoList={todoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  ); 
};

export default App;