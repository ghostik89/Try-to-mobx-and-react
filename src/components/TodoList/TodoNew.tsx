import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";
import { Input, Button } from "antd";

export const TodoNew = () => {
    const [newTodo, setTodo] = useState('');
    const todoList = useStore();

    const addTodo = () => {
        todoList.addTodo(newTodo);
        setTodo('');
    };

    return (
        <div className="todo-new">
            <Input placeholder="Basic usage" value={newTodo} onChange={(e) => setTodo(e.target.value)}/>
            <Button type="primary" onClick={addTodo}>edit</Button>
        </div>
    )
};