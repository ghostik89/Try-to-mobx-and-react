import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";
import TodoItem from "../../store/TodoItem";
import { Button } from 'antd';

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
                        <input type="text" onChange={(e) => setText(e.target.value)}/>
                        <Button type="primary">Primary</Button>
                        <button onClick={saveText}>save</button>
                    </div>
                    :
                    <div>
                        <span>{todo.text}</span>
                        <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
                        <Button type="primary">Primary</Button>
                        <button onClick={() => setEdit(true)}>edit</button>
                        <button onClick={() => todoList.removeTodo(todo)}>X</button>
                    </div>
            }
        </div>
    )
};