import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";
import TodoItem from "../../store/TodoItem";
import { Button } from 'antd';
import { Typography } from 'antd';
import { Checkbox } from 'antd';
import { Input } from 'antd';

const { Text } = Typography;


const divStyles = {
    "margin": '1rem'
};

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
        <div className="todo-item">
            {
                isEditing ?
                    <div>
                        <Input placeholder="Basic usage" onChange={(e) => setText(e.target.value)}/>
                        <Button style={divStyles} type="primary" onClick={saveText}>Save</Button>
                    </div>
                    :
                    <div>
                        <Text>{todo.text}</Text>
                        <Checkbox onChange={todo.toggleIsDone}>Checkbox</Checkbox>
                        <Button style={divStyles} type="primary" onClick={() => setEdit(true)}>edit</Button>
                        <Button type="primary" danger onClick={() => todoList.removeTodo(todo)}>Delete</Button>
                    </div>
            }
        </div>
    )
};