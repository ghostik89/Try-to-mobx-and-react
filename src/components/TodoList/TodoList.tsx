import React from 'react';
import {useStore} from "../../helpers/use-store";
import {TodoItemComponent} from "./TodoItem";
import {useObserver} from "mobx-react-lite";


export const TodoListComponent = () => {
    const todoList = useStore();

    return useObserver(() => (
        <div className="todo-list">
            <div className="open-todos">
                <span>Open Todos</span>
                {todoList.openTodos.map(todo => <TodoItemComponent key={`${todo.id}-${todo.text}`} todo={todo}/>)}
            </div>
            <div className="finished-todos">
                <span>Finished Todos</span>
                {todoList.finishedTodos.map(todo => <TodoItemComponent key={`${todo.id}-${todo.text}`} todo={todo}/>)}
            </div>
        </div>
    ));
};