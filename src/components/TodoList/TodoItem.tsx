import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";
import TodoItem from "../../store/TodoItem";
import { Button, Space } from 'antd';
import { Checkbox } from 'antd';
import { Input } from 'antd';
import '../../containers/stylesTodo.css'




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
                        <Button type="primary" onClick={saveText}>Save</Button>
                    </Space>
                    :
                    <Space>
                        <Checkbox checked={todo.IsDoneTodo} onChange={todo.toggleIsDone}>{todo.text}</Checkbox>
                        <Button type="primary" onClick={() => setEdit(true)}>Edit</Button>
                        <Button type="primary" danger onClick={() => todoList.removeTodo(todo)}>Delete</Button>
                    </Space>
            }
        </div>
    )
};