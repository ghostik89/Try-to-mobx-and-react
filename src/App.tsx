import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoNew } from './components/TodoList/TodoNew';
import { TodoListComponent } from './components/TodoList/TodoList';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <TodoNew/>
      <TodoListComponent/>
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </div>
    </div>
  );
}

export default App;
