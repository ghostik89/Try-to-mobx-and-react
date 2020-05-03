import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";
import { Input, Button, Space, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";


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
            <Tooltip title="Add">
                <Button type="primary" onClick={addTodo} shape="circle" icon={<PlusOutlined />} />
            </Tooltip>
        </Space>
    )
};