import React from 'react';
import { TodoNew } from '../components/TodoList/TodoNew';
import { TodoListComponent } from '../components/TodoList/TodoList';
import "./stylesTodo.css";
import { Layout } from 'antd';

interface Props {
    history?: {
        push(url: string): void;
    };
} 


//todo: add history props
export const  TodoListPage = ({history}: Props) => {
  return (
    <>
    <Layout.Content className={"layoutStyle"}>
      <TodoNew className={"layoutStyle__todoNew"}/>
      <TodoListComponent/>
    </Layout.Content>
    </>
  );
}
