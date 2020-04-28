import { Button, Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React from 'react';
import { TodoList } from '../store/TodoList';
import TodoItem from '../store/TodoItem';
import { TodoNew } from '../components/TodoList/TodoNew';
import { TodoListComponent } from '../components/TodoList/TodoList';

interface Props {
    history: {
        push(url: string): void;
    };
}


//todo: add history props
export const  TodoListPage = () => {
  return (
    <Space>
        <TodoNew/>
        <TodoListComponent/>
    </Space>
  );
}
