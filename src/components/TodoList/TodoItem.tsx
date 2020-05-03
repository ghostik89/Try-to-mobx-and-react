import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";
import TodoItem from "../../store/TodoItem";
import { Button, Space, Tooltip } from 'antd';
import { Checkbox } from 'antd';
import { Input } from 'antd';
import '../../containers/stylesTodo.css'
import {CheckOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';

interface Props {
    todo: TodoItem;
}


export const TodoItemComponent = ({todo}: Props) => {
    const todoList = useStore();
    const [newText, setText] = useState('');
    const [isEditing, setEdit] = useState(false);

    const saveText = () => {
      todo.updateText(newText);
      setEdit(false);
      setText('');
    };

    return (
        <div className={"layoutStyle__todoList__todoItem"}>
            {
                isEditing ?
                    <Space>
                        <Input placeholder="Edit ToDo" onChange={(e) => setText(e.target.value)}/>
                        <Tooltip title="apply">
                            <Button type="primary" onClick={saveText} shape="circle" icon={<CheckOutlined />} />
                        </Tooltip>
                    </Space>
                    :
                    <Space>
                        <Checkbox checked={todo.IsDoneTodo} onChange={todo.toggleIsDone}>{todo.text}</Checkbox>
                        <Tooltip title="Edit">
                            <Button type="primary" onClick={() => setEdit(true)} shape="circle" icon={<EditOutlined />} />
                        </Tooltip>
                        <Tooltip title="Edit">
                            <Button type="primary" danger onClick={() => todoList.removeTodo(todo)} shape="circle" icon={<DeleteOutlined />} />
                        </Tooltip>
                    </Space>
            }
        </div>
    )
};