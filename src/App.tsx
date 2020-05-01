import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { TodoListPage } from './containers/TodoPage';
import { MyHeader } from './components/Header/MyHeader';

function App() {
  return (
    <div className="App">
      <MyHeader/>
      <TodoListPage />
    </div>
  );
}

export default App;
