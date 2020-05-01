import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";
import { Input, Button, Space } from "antd";


export interface TodoNewProps {
    className?: string
}

export const TodoNew = ({className = "ew"}: TodoNewProps) => {
    const [newTodo, setTodo] = useState('');
    const todoList = useStore();

    const addTodo = () => {
        todoList.addTodo(newTodo);
        setTodo('');
    };

    return (
        <Space className={className}>
            <Input placeholder="Basic usage" value={newTodo} onChange={(e) => setTodo(e.target.value)}/>
            <Button type="primary" onClick={addTodo}>Add</Button>
        </Space>
    )
};